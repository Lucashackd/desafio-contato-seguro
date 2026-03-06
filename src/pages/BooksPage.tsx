import { PlusOutlined } from "@ant-design/icons";
import { Button, Skeleton } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { useEffect, useState } from "react";
import BookCreateModal from "../components/BookCreateModal";
import BookDeleteModal from "../components/BookDeleteModal";
import BookDetailModal from "../components/BookDetailModal";
import BookTable from "../components/BookTable";
import { getAuthors } from "../services/authorService";
import { addBook, deleteBook, getBooks } from "../services/bookService";
import type { Author } from "../types/author";
import type { Book, CreateBookDto } from "../types/book";

export default function BooksPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState<Book | null>(null);
  const [selectedForView, setSelectedForView] = useState<Book | null>(null);

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
    const loadInitialData = async () => {
      setIsLoading(true);
      const [booksData, authorsData] = await Promise.all([
        getBooks(),
        getAuthors(),
      ]);
      setBooks(booksData);
      setAuthors(authorsData);
      setIsLoading(false);
    };
    loadInitialData();
  }, []);

  const handleCreate = async (data: CreateBookDto) => {
    await addBook(data);
    await load();
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    await load();
    setSelectedForDelete(null);
  };

  return (
    <section style={{ padding: 24 }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <div>
          <Title level={2} style={{ fontWeight: 800, margin: 0 }}>
            Livros
          </Title>
          <Text type="secondary">
            Gerencie o registro de todos os livros disponíveis na biblioteca,
            com suas respectivas informações.
          </Text>
        </div>
        <Button
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
          size="large"
          style={{ fontWeight: 600, borderRadius: 8 }}
          type="primary"
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
        <BookTable
          authors={authors}
          books={books}
          onDelete={setSelectedForDelete}
          onView={setSelectedForView}
        />
      )}

      <BookCreateModal
        authors={authors}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreate}
      />

      {selectedForDelete && (
        <BookDeleteModal
          book={selectedForDelete}
          isOpen={!!selectedForDelete}
          onClose={() => setSelectedForDelete(null)}
          onSubmit={handleDelete}
        />
      )}

      {selectedForView && (
        <BookDetailModal
          authors={authors}
          book={selectedForView}
          isOpen={!!selectedForView}
          onClose={() => setSelectedForView(null)}
        />
      )}
    </section>
  );
}
