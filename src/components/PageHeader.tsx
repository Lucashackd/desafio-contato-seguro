import { useDevice } from "../hooks/useDevice";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import type { ReactNode } from "react";
import "./PageHeader.css";

type PageHeaderProps = {
  action: ReactNode;
  title: string;
  description: string;
};

export default function PageHeader({
  action,
  title,
  description,
}: PageHeaderProps) {
  const { isMobile } = useDevice();
  return (
    <div
      className="header-area"
      style={{
        alignItems: isMobile ? "stretch" : "center",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 12 : 0,
      }}
    >
      <div className="header-info">
        <Title className="title" level={1}>
          {title}
        </Title>
        <Text className="description" type="secondary">
          {description}
        </Text>
      </div>
      {action}
    </div>
  );
}
