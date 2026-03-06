import { Button, Skeleton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import BookTable from "../components/BookTable";
import { useEffect, useState } from "react";
import { addBook, getBooks } from "../services/bookService";
import { getAuthors } from "../services/authorService";
import type { Author } from "../types/author";
import type { Book, CreateBookDto } from "../types/book";
import BookModal from "../components/BookModal";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const load = async () => {
    setIsLoading(true);
    const [booksData, authorsData] = await Promise.all([
      getBooks(),
      getAuthors(),
    ]);
    setBooks(booksData);
    setAuthors(authorsData);
    setIsLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (data: CreateBookDto) => {
    await addBook(data);
    await load();
    setIsModalOpen(false);
  };

  return (
    <section style={{ padding: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <Title level={2} style={{ margin: 0, fontWeight: 800 }}>
            Livros
          </Title>
          <Text type="secondary">
            Gerencie o registro de todos os livros disponíveis na biblioteca,
            com suas respectivas informações.
          </Text>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => setIsModalOpen(true)}
          style={{ borderRadius: 8, fontWeight: 600 }}
        >
          Adicionar Livro
        </Button>
      </div>

      {isLoading ? (
        <Skeleton active />
      ) : books.length === 0 ? (
        <Text type="warning">
          Nenhum livro encontrado. Adicione um novo livro para começar.
        </Text>
      ) : (
        <BookTable books={books} authors={authors} />
      )}

      <BookModal
        isOpen={isModalOpen}
        book={selectedBook}
        authors={authors}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
