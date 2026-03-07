import { PlusOutlined } from "@ant-design/icons";
import { Button, Skeleton } from "antd";
import Text from "antd/es/typography/Text";
import { useEffect, useState } from "react";
import AuthorCreateModal from "../components/AuthorCreateModal";
import AuthorDetailModal from "../components/AuthorDetailModal";
import AuthorTable from "../components/AuthorTable";
import DeleteModal from "../components/DeleteModal";
import PageHeader from "../components/PageHeader";
import { useDevice } from "../hooks/useDevice";
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

  const { isMobile } = useDevice();

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
    <section id="authors-page" style={{ padding: isMobile ? 12 : 24 }}>
      <PageHeader
        description="Gerencie o registro de todos os autores disponíveis na biblioteca, com suas respectivas informações."
        title="Autores"
        action={
          <Button
            block={isMobile}
            className="page-header-add-button"
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
            Adicionar Autor
          </Button>
        }
      />

      {isLoading ? (
        <Skeleton active />
      ) : authors.length === 0 ? (
        <Text style={{ color: "#d84a1b", fontWeight: "500" }} type="warning">
          Nenhum autor encontrado. Adicione um novo autor para começar.
        </Text>
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
        <DeleteModal<Author>
          target={selectedForDelete}
          isOpen={!!selectedForDelete}
          onClose={() => setSelectedForDelete(null)}
          onSubmit={(author) => handleDelete(author.id)}
          title="Excluir Autor"
          description={(author) => (
            <Text>
              Tem certeza que deseja excluir <strong>{author.name}</strong>?
              Esta ação não pode ser desfeita.
            </Text>
          )}
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
