import { Divider, Modal } from "antd";
import Text from "antd/es/typography/Text";
import type { Author } from "../types/author";
import { UserOutlined } from "@ant-design/icons";

interface Props {
  author?: Author | null;
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
      style={{ minWidth: "fit-content", maxWidth: "90vw" }}
      title="Detalhes do autor"
    >
      <Divider />
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "flex-start",
          gap: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UserOutlined style={{ fontSize: "3rem", color: "#1677ff" }} />
        </div>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "1rem" }}>
            <strong>Nome:</strong> {author?.name}
          </Text>
          {author?.email && (
            <Text style={{ fontSize: "1rem" }}>
              <strong>Email:</strong> {author?.email}
            </Text>
          )}
        </span>
      </div>
    </Modal>
  );
}
