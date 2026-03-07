import {
  DeleteOutlined,
  EyeOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Table, Tooltip, type TableColumnsType } from "antd";
import getAuthorName from "../helpers/getAuthorName";
import type { Author } from "../types/author";
import type { Book } from "../types/book";
import { useDevice } from "../hooks/useDevice";
import "./BookTable.css";

type BookTableProps = {
  authors: Author[];
  books: Book[];
  onDelete: (book: Book) => void;
  onView: (book: Book) => void;
};

export default function BookTable({
  authors,
  books,
  onDelete,
  onView,
}: BookTableProps) {
  const { isMobile } = useDevice();
  const columns: TableColumnsType<Book> = [
    {
      title: "Título",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Autor",
      dataIndex: "author_id",
      key: "author_id",
      responsive: ["sm"],
      render: (id: string) => {
        return getAuthorName(authors, id);
      },
    },
    {
      title: "Páginas",
      dataIndex: "pages",
      key: "pages",
      responsive: ["lg"],
      width: 120,
      render: (pages: number) => pages ?? "-",
    },
    {
      title: "Ações",
      key: "actions",
      width: isMobile ? 110 : 140,
      render: (_: unknown, record: Book) => (
        <div className="actions">
          <Tooltip
            color={"blue"}
            title={isMobile ? null : "Visualizar detalhes"}
          >
            <Button onClick={() => onView(record)} type="primary">
              <EyeOutlined />
            </Button>
          </Tooltip>

          <Tooltip color={"red"} title={isMobile ? null : "Excluir livro"}>
            <Button danger onClick={() => onDelete(record)} type="dashed">
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Table<Book>
      className="book-table"
      columns={columns}
      dataSource={books}
      rowKey="id"
      scroll={{ x: 420 }}
      size={isMobile ? "small" : "middle"}
      pagination={{
        className: "pagination",
        pageSize: isMobile ? 5 : 10,
        responsive: true,
        itemRender: (page, type, originalElement) => {
          if (type === "page") {
            return (
              <button aria-label={`Ir para página ${page}`} type="button">
                {page}
              </button>
            );
          }

          if (type === "prev") {
            return (
              <button aria-label="Página anterior" type="button">
                <LeftOutlined />
              </button>
            );
          }

          if (type === "next") {
            return (
              <button aria-label="Próxima página" type="button">
                <RightOutlined />
              </button>
            );
          }

          return originalElement;
        },
      }}
    ></Table>
  );
}
