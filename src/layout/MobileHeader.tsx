import { MenuOutlined, ReadFilled } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";

type MobileHeaderProps = {
  open: () => void;
};

export default function MobileHeader({ open }: MobileHeaderProps) {
  return (
    <Header className="mobile-header__container">
      <Button
        icon={<MenuOutlined style={{ fontSize: 18 }} />}
        onClick={open}
        type={"text"}
      ></Button>
      <div className="title">
        <ReadFilled />
        <span>Biblioteca</span>
      </div>
    </Header>
  );
}
