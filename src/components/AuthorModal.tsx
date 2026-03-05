import { Divider, Form, Input, Modal } from "antd";
import type { Author, CreateAuthorDto } from "../types/author";
import { useEffect } from "react";
import Text from "antd/es/typography/Text";
import { UserOutlined } from "@ant-design/icons";

interface Props {
  author?: Author | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateAuthorDto) => void;
  readOnly?: boolean;
}

export default function AuthorModal({
  isOpen,
  author,
  onClose,
  onSubmit,
  readOnly,
}: Props) {
  const [form] = Form.useForm();

  const handleSave = async () => {
    const values = await form.validateFields();
    onSubmit(values);
  };

  useEffect(() => {
    if (!isOpen) {
      form.resetFields();
    }
  }, [isOpen, form]);

  if (readOnly) {
    return (
      <Modal
        title="Detalhes do autor"
        open={isOpen}
        onCancel={onClose}
        footer={null}
        style={{ minWidth: "fit-content", maxWidth: "90vw" }}
        centered
      >
        <Divider />
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
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
              justifyContent: "space-between",
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

  return (
    <Modal
      title="Adicione um novo autor"
      okText="Salvar"
      cancelText="Cancelar"
      open={isOpen}
      onCancel={onClose}
      onOk={handleSave}
      centered
    >
      <Divider />
      <Form form={form}>
        <Form.Item
          label="Nome"
          name="name"
          layout="vertical"
          rules={[{ required: true, message: "Informe o nome" }]}
        >
          <Input type={"text"} required placeholder="Informe o nome do autor" />
        </Form.Item>

        <Form.Item label="Email (opcional)" name="email" layout="vertical">
          <Input
            type="email"
            placeholder="Informe o email do autor (opcional)"
          />
        </Form.Item>
      </Form>
      <Divider />
    </Modal>
  );
}
