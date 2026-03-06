import { Layout, Menu } from "antd";
import { BookOutlined, ReadFilled, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, Outlet } from "react-router";

const { Sider, Content } = Layout;

const menuItems = [
  { key: "/livros", icon: <BookOutlined />, label: "Livros" },
  { key: "/autores", icon: <UserOutlined />, label: "Autores" },
];

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light" style={{ padding: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#000",
            padding: "0 16px",
            marginBottom: 24,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          <ReadFilled style={{ marginRight: 8, color: "#1890FF" }} />
          <span>Biblioteca</span>
        </div>
        <Menu
          style={{
            border: "none",
            userSelect: "none",
          }}
          theme="light"
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>

      <Layout>
        <Content style={{ backgroundColor: "#F5F7F8" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
