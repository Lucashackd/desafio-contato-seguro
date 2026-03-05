import { Divider, Form, Input, Modal } from "antd";
import type { Author, CreateAuthorDto } from "../types/author";
import { useEffect } from "react";

interface Props {
  author: Author | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateAuthorDto) => void;
}

export default function AuthorModal({
  isOpen,
  author,
  onClose,
  onSubmit,
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
