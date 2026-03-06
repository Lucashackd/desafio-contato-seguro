import { PlusOutlined } from "@ant-design/icons";
import { Button, Skeleton } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import AuthorCreateModal from "../components/AuthorCreateModal";
import AuthorDeleteModal from "../components/AuthorDeleteModal";
import AuthorDetailModal from "../components/AuthorDetailModal";
import AuthorTable from "../components/AuthorTable";
import { addAuthor, deleteAuthor, getAuthors } from "../services/authorService";
import type { Author, CreateAuthorDto } from "../types/author";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState<Author | null>(
    null,
  );
  const [selectedForView, setSelectedForView] = useState<Author | null>(null);

  const load = async () => {
    setIsLoading(true);
    const authorsData = await getAuthors();
    setAuthors(authorsData);
    setIsLoading(false);
  };

  const handleCreate = async (data: CreateAuthorDto) => {
    await addAuthor(data);
    await load();
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await deleteAuthor(id);
    await load();
    setSelectedForDelete(null);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      const authorsData = await getAuthors();
      setAuthors(authorsData);
      setIsLoading(false);
    };
    loadInitialData();
  }, []);

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
            Autores
          </Title>
          <Text type="secondary">
            Gerencie o registro de todos os autores disponíveis na biblioteca,
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
          Adicionar Autor
        </Button>
      </div>

      {isLoading ? (
        <Skeleton active />
      ) : authors.length === 0 ? (
        <Text type="secondary">Nenhum autor encontrado.</Text>
      ) : (
        <AuthorTable
          authors={authors}
          onDelete={setSelectedForDelete}
          onView={setSelectedForView}
        />
      )}

      <AuthorCreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreate}
      />

      {selectedForDelete && (
        <AuthorDeleteModal
          author={selectedForDelete}
          isOpen={!!selectedForDelete}
          onClose={() => setSelectedForDelete(null)}
          onSubmit={handleDelete}
        />
      )}

      {selectedForView && (
        <AuthorDetailModal
          author={selectedForView}
          isOpen={!!selectedForView}
          onClose={() => setSelectedForView(null)}
        />
      )}
    </section>
  );
}
