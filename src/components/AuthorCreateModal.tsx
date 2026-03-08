import { Divider, Form, Input, Modal } from "antd";
import type { CreateAuthorDto } from "../types/author";

type AuthorCreateProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateAuthorDto) => void;
};

export default function AuthorCreateModal({
  isOpen,
  onClose,
  onSubmit,
}: AuthorCreateProps) {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const values = await form.validateFields();
    onSubmit(values);
  };

  return (
    <Modal
      afterOpenChange={(open) => {
        if (!open) form.resetFields();
      }}
      cancelText="Cancelar"
      centered
      forceRender
      okText="Salvar"
      onCancel={onClose}
      onOk={handleSubmit}
      open={isOpen}
      title="Adicione um novo autor"
    >
      <Divider />
      <Form form={form}>
        <Form.Item
          label="Nome"
          layout="vertical"
          name="name"
          rules={[{ required: true, message: "Informe o nome" }]}
        >
          <Input type={"text"} required placeholder="Informe o nome do autor" />
        </Form.Item>

        <Form.Item
          label="Email (opcional)"
          layout="vertical"
          name="email"
          rules={[{ type: "email", message: "Informe um email válido" }]}
        >
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
