import { Button, Popconfirm, Space, Table } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import type { Book } from "../types/book";
import type { Author } from "../types/author";
import { key } from "localforage";

interface Props {
  books: Book[];
  authors: Author[];
  onView: (book: Book) => void;
  onDelete: (id: string) => void;
}

export default async function BookTable({
  books,
  authors,
  onView,
  onDelete,
}: Props) {
  const columns = [
    {
      title: "Título",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Autor",
      dataIndex: "author",
      key: "author",
      render: (id: string) => {
        const author = authors.find((a) => a.id === id);
        return author ? author.name : "-";
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
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />} onClick={() => onView(record)} />
          <Popconfirm
            title="Excluir autor?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Book Table</h1>
      <Table
        columns={columns}
        dataSource={books}
        rowKey={(book) => book.id}
      ></Table>
    </div>
  );
}
