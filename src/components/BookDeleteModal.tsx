import { Form, Modal } from "antd";
import type { Book } from "../types/book";
import Text from "antd/es/typography/Text";
import { useEffect } from "react";

interface Props {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (id: string) => void;
}

export default function BookDeleteModal({
  book,
  isOpen,
  onClose,
  onSubmit,
}: Props) {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    onSubmit(book.id);
  };

  useEffect(() => {
    if (!isOpen) {
      form.resetFields();
    }
  }, [isOpen, form]);

  return (
    <Modal
      cancelText="Cancelar"
      centered
      okButtonProps={{ danger: true }}
      okText="Excluir"
      onCancel={onClose}
      onOk={handleSubmit}
      open={isOpen}
      title="Excluir Livro"
    >
      <Form form={form}>
        <Text>
          Tem certeza que deseja excluir o livro <strong>{book.title}</strong>?
          Essa ação não pode ser desfeita.
        </Text>
      </Form>
    </Modal>
  );
}
