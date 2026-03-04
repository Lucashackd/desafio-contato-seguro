import { Divider, Form, Input, InputNumber, Modal, Select } from "antd";
import type { Book } from "../types/book";
import type { Author } from "../types/author";

interface Props {
  isModalOpen: boolean;
  book: Book | null;
  authors: Author[];
  OnClose: () => void;
}

export default function BookModal({
  isModalOpen,
  book,
  authors,
  OnClose,
}: Props) {
  return (
    <>
      <Modal
        centered
        title="Adicione um novo livro"
        open={isModalOpen}
        onCancel={OnClose}
      >
        <Divider />
        <Form>
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

          <Form.Item label="Páginas" name="pages" layout="vertical">
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
    </>
  );
}
