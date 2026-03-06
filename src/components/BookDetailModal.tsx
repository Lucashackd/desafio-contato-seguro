import { BookOutlined } from "@ant-design/icons";
import { Divider, Modal } from "antd";
import Text from "antd/es/typography/Text";
import getAuthorName from "../helpers/getAuthorName";
import type { Author } from "../types/author";
import type { Book } from "../types/book";

interface Props {
  authors: Author[];
  book: Book;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDetailModal({
  authors,
  book,
  isOpen,
  onClose,
}: Props) {
  return (
    <Modal
      centered
      footer={null}
      onCancel={onClose}
      open={isOpen}
      style={{ minWidth: "fit-content", maxWidth: "90vw" }}
      title="Detalhes do livro"
    >
      <Divider />

      <div
        style={{
          alignItems: "stretch",
          display: "flex",
          gap: 8,
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BookOutlined style={{ color: "#1677ff", fontSize: "3rem" }} />
        </div>

        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "1rem" }}>
            <strong>Título:</strong> {book?.title}
          </Text>

          <Text style={{ fontSize: "1rem" }}>
            <strong>Autor:</strong> {getAuthorName(authors, book.author_id)}
          </Text>

          {book?.pages && (
            <Text style={{ fontSize: "1rem" }}>
              <strong>Páginas:</strong> {book?.pages}
            </Text>
          )}
        </span>
      </div>
    </Modal>
  );
}
