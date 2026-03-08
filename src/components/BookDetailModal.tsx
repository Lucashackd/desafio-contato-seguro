import Text from "antd/es/typography/Text";
import getAuthorName from "../helpers/getAuthorName";
import { getFormattedDateTime } from "../helpers/getFormattedDate";
import type { Author } from "../types/author";
import type { Book } from "../types/book";
import DetailModal from "./DetailModal";

type BookDetailProps = {
  authors: Author[];
  book: Book;
  isOpen: boolean;
  onClose: () => void;
};

export default function BookDetailModal({
  authors,
  book,
  isOpen,
  onClose,
}: BookDetailProps) {
  return (
    <DetailModal
      isOpen={isOpen}
      onClose={onClose}
      title="Detalhes do livro"
      content={
        <>
          <div className="detail-modal__field">
            <Text className="detail-modal__text">
              <strong>Título:</strong> {book?.title}
            </Text>
          </div>

          <div className="detail-modal__field">
            <Text className="detail-modal__text">
              <strong>Autor:</strong> {getAuthorName(authors, book.author_id)}
            </Text>
          </div>

          {book?.pages && (
            <div className="detail-modal__field">
              <Text className="detail-modal__text">
                <strong>Páginas:</strong> {book?.pages}
              </Text>
            </div>
          )}

          <div className="detail-modal__field">
            <Text className="detail-modal__text">
              <strong>Adcionado em:</strong>{" "}
              {getFormattedDateTime(book.createdAt)}
            </Text>
          </div>
        </>
      }
    />
  );
}
