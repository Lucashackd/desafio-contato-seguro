import {
  BookOutlined,
  MenuOutlined,
  ReadFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router";
import { useDevice } from "../hooks/useDevice";

type SidebarContentProps = {
  onMenuClick?: () => void;
};

const { Sider, Content } = Layout;

const menuItems = [
  { key: "/autores", icon: <UserOutlined />, label: "Autores" },
  { key: "/livros", icon: <BookOutlined />, label: "Livros" },
];

const SidebarContent = ({ onMenuClick }: SidebarContentProps) => {
  const { isDesktop, isMobile } = useDevice();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          fontSize: 18,
          fontWeight: "bold",
          padding: "0 16px",
        }}
      >
        {!isMobile && (
          <div
            style={{
              color: "#1B263B",
              display: "flex",
              justifyContent: isDesktop ? "flex-start" : "center",
              marginBottom: 24,
              width: "100%",
            }}
          >
            <ReadFilled style={{ marginRight: isDesktop ? 8 : 0 }} />
            {isDesktop && <span>Biblioteca</span>}
          </div>
        )}
      </div>

      <nav aria-label="Menu principal">
        <Menu
          className="sidebar-menu"
          style={{
            border: "none",
            userSelect: "none",
          }}
          theme="light"
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => {
            navigate(key);
            onMenuClick?.();
          }}
        />
      </nav>
    </>
  );
};

export default function AppLayout() {
  const { isMobile, isTablet } = useDevice();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile && (
        <Sider
          collapsed={isTablet}
          collapsedWidth={64}
          style={{ padding: "16px" }}
          theme="light"
          width={isTablet ? 64 : 240}
        >
          <SidebarContent />
        </Sider>
      )}

      {isMobile && (
        <Drawer
          closeIcon={null}
          onClose={() => setIsDrawerOpen(false)}
          open={isDrawerOpen}
          placement="left"
          size={315}
          title={
            <div
              style={{
                alignItems: "center",
                color: "#000",
                display: "flex",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              <ReadFilled style={{ marginRight: 8, color: "#1890FF" }} />
              <span>Biblioteca</span>
            </div>
          }
        >
          <SidebarContent onMenuClick={() => setIsDrawerOpen(false)} />
        </Drawer>
      )}

      <Layout style={{ height: "100vh" }}>
        {isMobile && (
          <header>
            <Header
              style={{
                alignItems: "center",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 24,
                paddingLeft: 18,
              }}
            >
              <Button
                icon={<MenuOutlined style={{ fontSize: 18 }} />}
                onClick={() => setIsDrawerOpen(true)}
                type={"text"}
              ></Button>
              <div
                style={{
                  alignItems: "center",
                  color: "#000",
                  display: "flex",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                <ReadFilled style={{ marginRight: 8, color: "#1890FF" }} />
                <span>Biblioteca</span>
              </div>
            </Header>
          </header>
        )}

        <Content style={{ backgroundColor: "#F2F0EF", minHeight: "100%" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
