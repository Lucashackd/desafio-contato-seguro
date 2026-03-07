import { PlusOutlined } from "@ant-design/icons";
import { Button, notification, Skeleton } from "antd";
import Text from "antd/es/typography/Text";
import { useCallback, useEffect, useState } from "react";
import BookCreateModal from "../components/BookCreateModal";
import BookDetailModal from "../components/BookDetailModal";
import BookTable from "../components/BookTable";
import DeleteModal from "../components/DeleteModal";
import PageHeader from "../components/PageHeader";
import { useDevice } from "../hooks/useDevice";
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

  const { isMobile } = useDevice();

  const load = useCallback(async () => {
    try {
      setIsLoading(true);
      const [booksData, authorsData] = await Promise.all([
        getBooks(),
        getAuthors(),
      ]);
      setBooks(booksData);
      setAuthors(authorsData);
    } catch (error) {
      notification.error({
        message: "Ocorreu um problema ao carregar livros",
        description: `Erro: ${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

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
    <section style={{ padding: isMobile ? 12 : 24 }}>
      <PageHeader
        description="Gerencie o registro de todos os livros disponíveis na biblioteca, com suas respectivas informações."
        title="Livros"
        action={
          <Button
            block={isMobile}
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
            size="large"
            style={{
              backgroundColor: "#1B263B",
              fontWeight: 600,
              borderRadius: 8,
            }}
            type="primary"
          >
            Adicionar Livro
          </Button>
        }
      />

      {isLoading ? (
        <Skeleton active />
      ) : books.length === 0 ? (
        <Text style={{ color: "#AB3A15", fontWeight: "500" }} type="warning">
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
        <DeleteModal<Book>
          target={selectedForDelete}
          isOpen={!!selectedForDelete}
          onClose={() => setSelectedForDelete(null)}
          onSubmit={(book) => handleDelete(book.id)}
          title="Excluir Livro"
          description={(book) => (
            <Text>
              Tem certeza que deseja excluir <strong>{book.title}</strong>? Esta
              ação não pode ser desfeita.
            </Text>
          )}
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
