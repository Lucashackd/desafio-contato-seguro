import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import { useDevice } from "../hooks/useDevice";
import SidebarContent from "./SidebarContent";
import DrawerMenu from "./DrawerMenu";
import MobileHeader from "./MobileHeader";

const { Sider, Content } = Layout;

export default function AppLayout() {
  const { isMobile, isTablet } = useDevice();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Layout className="layout">
      {!isMobile && (
        <Sider
          className="sider"
          collapsed={isTablet}
          collapsedWidth={64}
          theme="light"
          width={isTablet ? 64 : 240}
        >
          <SidebarContent />
        </Sider>
      )}

      {isMobile && (
        <DrawerMenu
          isDrawerOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}

      <Layout className="layout">
        {isMobile && (
          <header>
            <MobileHeader open={() => setIsDrawerOpen(true)} />
          </header>
        )}

        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
