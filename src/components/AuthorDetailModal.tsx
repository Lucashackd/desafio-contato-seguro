import { UserOutlined } from "@ant-design/icons";
import { Divider, Modal } from "antd";
import Text from "antd/es/typography/Text";
import type { Author } from "../types/author";

interface Props {
  author: Author;
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthorDetailModal({ author, isOpen, onClose }: Props) {
  return (
    <Modal
      centered
      footer={null}
      onCancel={onClose}
      open={isOpen}
      style={{ maxWidth: "90vw", minWidth: "fit-content" }}
      title="Detalhes do autor"
    >
      <Divider />
      <div
        style={{
          alignItems: "stretch",
          display: "flex",
          gap: 8,
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UserOutlined style={{ color: "#1677ff", fontSize: "3rem" }} />
        </div>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "1rem" }}>
            <strong>Nome:</strong> {author.name}
          </Text>
          {author.email && (
            <Text style={{ fontSize: "1rem" }}>
              <strong>Email:</strong> {author.email}
            </Text>
          )}
        </span>
      </div>
    </Modal>
  );
}
