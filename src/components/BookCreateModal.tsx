import { Divider, Form, Input, InputNumber, Modal, Select } from "antd";
import type { Author } from "../types/author";
import type { CreateBookDto } from "../types/book";

type BookCreateProps = {
  authors?: Author[] | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateBookDto) => void;
};

export default function BookCreateModal({
  authors,
  isOpen,
  onClose,
  onSubmit,
}: BookCreateProps) {
  const [form] = Form.useForm<CreateBookDto>();

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
      title="Adicione um novo livro"
    >
      <Divider />
      <Form form={form}>
        <Form.Item
          label="Título"
          layout="vertical"
          name="title"
          rules={[{ required: true, message: "Informe o título" }]}
        >
          <Input
            placeholder="Informe o título do livro"
            required
            type={"text"}
          />
        </Form.Item>

        <Form.Item
          label="Autor"
          layout="vertical"
          name="author_id"
          rules={[{ required: true, message: "Informe o autor" }]}
        >
          <Select
            options={authors?.map((author) => ({
              label: author.name,
              value: author.id,
            }))}
            placeholder="Selecione o autor"
          ></Select>
        </Form.Item>

        <Form.Item label="Páginas (Opcional)" layout="vertical" name="pages">
          <InputNumber
            min={1}
            placeholder="Número de páginas"
            style={{ minWidth: "100%" }}
            type="number"
          />
        </Form.Item>
      </Form>
      <Divider />
    </Modal>
  );
}
