import { Form, Modal } from "antd";
import Text from "antd/es/typography/Text";
import type { Author } from "../types/author";
import { useEffect } from "react";

interface Props {
  author?: Author | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (id: string) => void;
}

export default function AuthorDeleteModal({
  author,
  isOpen,
  onClose,
  onSubmit,
}: Props) {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    if (!author) return;
    onSubmit(author.id);
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
      title="Excluir autor"
    >
      <Form form={form}>
        <Text>
          Tem certeza que deseja excluir <strong>{author?.name}</strong>? Esta
          ação não pode ser desfeita.
        </Text>
      </Form>
    </Modal>
  );
}
