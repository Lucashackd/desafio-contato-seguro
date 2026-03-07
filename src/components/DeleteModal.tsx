import { Modal } from "antd";
import type { ReactNode } from "react";
import "./DeleteModal.css";

type DeleteModalProps<T> = {
  description: (target: T) => ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (target: T) => void;
  target: T;
  title: string;
};

export default function DeleteModal<T>({
  description,
  isOpen,
  onClose,
  onSubmit,
  target,
  title,
}: DeleteModalProps<T>) {
  return (
    <Modal
      cancelText="Cancelar"
      centered
      className="delete-modal"
      okButtonProps={{ danger: true }}
      okText="Excluir"
      onCancel={onClose}
      onOk={() => onSubmit(target)}
      open={isOpen}
      title={title}
    >
      {description(target)}
    </Modal>
  );
}
