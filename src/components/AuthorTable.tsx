import { Button, Table } from "antd";
import type { Author } from "../types/author";

interface Props {
  authors: Author[];
  onView: (author: Author) => void;
}

export default function AuthorTable({ authors, onView }: Props) {
  const Columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email: string) => email ?? "-",
    },
    {
      title: "Ações",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button type="primary" onClick={() => onView(record)}>
            Ver
          </Button>
          <Button type="dashed" danger>
            Excluir
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={Columns} dataSource={authors} rowKey="id" />;
}
