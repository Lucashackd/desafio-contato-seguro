import { Divider, Modal } from "antd";
import "./DetailModal.css";
import type { ReactNode } from "react";

type DetailModalProps = {
  content: ReactNode;
  icon: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export default function DetailModal({
  content,
  icon,
  isOpen,
  onClose,
  title,
}: DetailModalProps) {
  return (
    <Modal
      centered
      className="detail-modal"
      footer={null}
      onCancel={onClose}
      open={isOpen}
      title={title}
    >
      <Divider />

      <div className="detail-modal__body">
        <div className="detail-modal__icon">{icon}</div>
        <div className="detail-modal__content">{content}</div>
      </div>
    </Modal>
  );
}
