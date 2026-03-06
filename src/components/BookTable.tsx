import { Button, Table } from "antd";
import type { Book } from "../types/book";
import type { Author } from "../types/author";

interface Props {
  books: Book[];
  authors: Author[];
}

export default function BookTable({ books, authors }: Props) {
  const columns = [
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
      render: () => <Button type="link">Editar</Button>,
    },
  ];

  return <Table columns={columns} dataSource={books} rowKey="id"></Table>;
}
