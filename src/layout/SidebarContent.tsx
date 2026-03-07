import { BookOutlined, ReadFilled, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router";
import { useDevice } from "../hooks/useDevice";

type SidebarContentProps = {
  onMenuClick?: () => void;
};

const menuItems = [
  { key: "/autores", icon: <UserOutlined />, label: "Autores" },
  { key: "/livros", icon: <BookOutlined />, label: "Livros" },
];

export default function SidebarContent({ onMenuClick }: SidebarContentProps) {
  const { isDesktop, isMobile } = useDevice();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar-content-title title">
        {!isMobile && (
          <div className="not-mobile title">
            <ReadFilled />
            {isDesktop && <span>Biblioteca</span>}
          </div>
        )}
      </div>

      <nav aria-label="Menu principal">
        <Menu
          className="sidebar-menu"
          items={menuItems}
          mode="vertical"
          onClick={({ key }) => {
            navigate(key);
            onMenuClick?.();
          }}
          selectedKeys={[location.pathname]}
          theme="light"
        />
      </nav>
    </>
  );
}
