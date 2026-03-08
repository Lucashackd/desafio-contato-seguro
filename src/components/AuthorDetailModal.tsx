import {
  CalendarOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import DetailModal from "./DetailModal";
import { getFormattedDateTime } from "../helpers/getFormattedDate";
import { useEffect, useState } from "react";
import { getBooksByAuthorId } from "../services/bookService";
import type { Author } from "../types/author";
import type { Book } from "../types/book";
import AuthorBookList from "./AuthorBookList";
import { Divider, Skeleton } from "antd";

type AuthorDetailProps = {
  author: Author;
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthorDetailModal({
  author,
  isOpen,
  onClose,
}: AuthorDetailProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      const data = await getBooksByAuthorId(author.id);
      setBooks(data);
      setIsLoading(false);
    };

    if (isOpen) loadBooks();
  }, [author.id, isOpen]);

  return (
    <DetailModal
      isOpen={isOpen}
      onClose={onClose}
      title="Detalhes do autor"
      content={
        <>
          <div className="detail-model__info">
            <div className="detail-modal__field">
              <UserOutlined className="detail-modal__icon" />
              <Text className="detail-modal__text">
                <strong>Nome:</strong> {author.name}
              </Text>
            </div>

            {author.email && (
              <div className="detail-modal__field">
                <MailOutlined className="detail-modal__icon" />
                <Text className="detail-modal__text">
                  <strong>Email:</strong> {author.email}
                </Text>
              </div>
            )}

            <div className="detail-modal__field">
              <CalendarOutlined className="detail-modal__icon" />
              <Text className="detail-modal__text">
                <strong>Adcionado em:</strong>{" "}
                {getFormattedDateTime(author.createdAt)}
              </Text>
            </div>
          </div>

          <Divider>Obras cadastradas</Divider>

          <div className="detail-modal__booklist">
            {isLoading ? (
              <Skeleton active title={false} />
            ) : books.length === 0 ? (
              <Text type="secondary">Nenhuma obra encontrada</Text>
            ) : (
              <AuthorBookList books={books} />
            )}
          </div>
        </>
      }
    />
  );
}
