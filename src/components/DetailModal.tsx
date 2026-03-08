import { Divider, Modal } from "antd";
import "./DetailModal.css";
import type { ReactNode } from "react";

type DetailModalProps = {
  content: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export default function DetailModal({
  content,
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
        <div className="detail-modal__content">{content}</div>
      </div>
    </Modal>
  );
}
