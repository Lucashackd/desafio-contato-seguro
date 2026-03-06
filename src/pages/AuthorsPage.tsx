import { Button, Skeleton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { useEffect, useState } from "react";
import type { Author, CreateAuthorDto } from "../types/author";
import { addAuthor, deleteAuthor, getAuthors } from "../services/authorService";
import AuthorTable from "../components/AuthorTable";
import AuthorDetailModal from "../components/AuthorDetailModal";
import AuthorCreateModal from "../components/AuthorCreateModal";
import AuthorDeleteModal from "../components/AuthorDeleteModal";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [selectedForDelete, setSelectedForDelete] = useState<Author | null>(
    null,
  );
  const [selectedForView, setSelectedForView] = useState<Author | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <Title level={2} style={{ margin: 0, fontWeight: 800 }}>
            Autores
          </Title>
          <Text type="secondary">
            Gerencie o registro de todos os autores disponíveis na biblioteca,
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
          onView={setSelectedForView}
          onDelete={setSelectedForDelete}
        />
      )}

      <AuthorCreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreate}
      />
      <AuthorDetailModal
        author={selectedForView}
        isOpen={!!selectedForView}
        onClose={() => setSelectedForView(null)}
      />
      <AuthorDeleteModal
        author={selectedForDelete}
        isOpen={!!selectedForDelete}
        onClose={() => setSelectedForDelete(null)}
        onSubmit={handleDelete}
      />
    </section>
  );
}
