import { Divider, Form, Input, InputNumber, Modal, Select } from "antd";
import type { Book, CreateBookDto } from "../types/book";
import type { Author } from "../types/author";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  book: Book | null;
  authors: Author[];
  onClose: () => void;
  onSubmit: (data: CreateBookDto) => void;
}

export default function BookModal({
  isOpen,
  book,
  authors,
  onClose,
  onSubmit,
}: Props) {
  const [form] = Form.useForm<CreateBookDto>();

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
      title="Adicione um novo livro"
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
          label="Título"
          name="title"
          layout="vertical"
          rules={[{ required: true, message: "Informe o título" }]}
        >
          <Input
            type={"text"}
            required
            placeholder="Informe o título do livro"
          />
        </Form.Item>

        <Form.Item
          label="Autor"
          name="author_id"
          layout="vertical"
          rules={[{ required: true, message: "Informe o autor" }]}
        >
          <Select
            placeholder="Selecione o autor"
            options={authors.map((author) => ({
              label: author.name,
              value: author.id,
            }))}
          ></Select>
        </Form.Item>

        <Form.Item label="Páginas (Opcional)" name="pages" layout="vertical">
          <InputNumber
            type="number"
            min={1}
            style={{ minWidth: "100%" }}
            placeholder="Número de páginas"
          />
        </Form.Item>
      </Form>
      <Divider />
    </Modal>
  );
}
