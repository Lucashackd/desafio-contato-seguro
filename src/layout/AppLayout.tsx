import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router";

export default function AppLayout() {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Header
        style={{
          minWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "white", fontSize: "10px" }}>
          Contato Seguro - Biblioteca
        </span>
        <Menu
          style={{
            userSelect: "none",
          }}
          mode="horizontal"
          selectedKeys={[location.pathname]}
          onClick={({ key }) => navigate(key)}
        >
          <Menu.Item key="/livros">Livros</Menu.Item>
          <Menu.Item key="/autores">Autores</Menu.Item>
        </Menu>
        <button style={{ color: "white", fontSize: "10px" }}>
          Trocar Tema
        </button>
      </Header>

      <Content style={{ padding: "20px" }}>
        <Layout>
          <Outlet />
        </Layout>
      </Content>

      <Footer>
        <span style={{ color: "black", fontSize: "10px" }}>
          Contato Seguro - Lucas Hackbart Döhnert
        </span>
      </Footer>
    </Layout>
  );
}
