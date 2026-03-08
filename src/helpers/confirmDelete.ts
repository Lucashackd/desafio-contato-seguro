import { Modal } from "antd";
import type { ReactNode } from "react";

type ConfirmDeleteParams<T> = {
  description: (target: T) => ReactNode;
  onSubmit: (target: T) => void;
  target: T;
  title: string;
};

export default function confirmDelete<T>({
  description,
  onSubmit,
  target,
  title,
}: ConfirmDeleteParams<T>) {
  Modal.confirm({
    cancelText: "Cancelar",
    icon: null,
    okButtonProps: { danger: true },
    okText: "Excluir",
    onOk: () => onSubmit(target),
    title,
    content: description(target),
  });
}
