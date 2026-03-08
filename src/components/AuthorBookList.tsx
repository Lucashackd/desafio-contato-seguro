import { BookOutlined } from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import type { Book } from "../types/book";
import "./DetailModal.css";

type AuthorBookListProps = {
  books: Book[];
};

export default function AuthorBookList({ books }: AuthorBookListProps) {
  return (
    <>
      {books.map((book) => (
        <div className="book-list__books" key={book.id}>
          <BookOutlined className="book-list__icon" key={book.id} />
          <Text className="book-list__text" key={book.id}>
            {book.title}
          </Text>
        </div>
      ))}
    </>
  );
}
