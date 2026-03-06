import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip, type TableColumnsType } from "antd";
import getAuthorName from "../helpers/getAuthorName";
import type { Author } from "../types/author";
import type { Book } from "../types/book";

interface Props {
  authors: Author[];
  books: Book[];
  onDelete: (book: Book) => void;
  onView: (book: Book) => void;
}

export default function BookTable({ authors, books, onDelete, onView }: Props) {
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
      render: (id: string) => {
        return getAuthorName(authors, id);
      },
    },
    {
      title: "Páginas",
      dataIndex: "pages",
      key: "pages",
      render: (pages: number) => pages ?? "-",
    },
    {
      title: "Ações",
      key: "actions",
      render: (_: unknown, record: Book) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Tooltip color={"blue"} title="Visualizar detalhes">
            <Button onClick={() => onView(record)} type="primary">
              <EyeOutlined />
            </Button>
          </Tooltip>

          <Tooltip color={"red"} title="Excluir livro">
            <Button danger onClick={() => onDelete(record)} type="dashed">
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return <Table<Book> columns={columns} dataSource={books} rowKey="id"></Table>;
}
