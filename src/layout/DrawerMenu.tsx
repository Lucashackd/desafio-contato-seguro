import { ReadFilled } from "@ant-design/icons";
import { Drawer } from "antd";
import SidebarContent from "./SidebarContent";

type DrawerMenuProps = {
  isDrawerOpen: boolean;
  onClose: () => void;
};

export default function DrawerMenu({ isDrawerOpen, onClose }: DrawerMenuProps) {
  return (
    <Drawer
      className="drawer-menu"
      closeIcon={null}
      onClose={onClose}
      open={isDrawerOpen}
      placement="left"
      size={315}
      title={
        <div className="title">
          <ReadFilled />
          <span>Biblioteca</span>
        </div>
      }
    >
      <SidebarContent onMenuClick={() => onClose()} />
    </Drawer>
  );
}
