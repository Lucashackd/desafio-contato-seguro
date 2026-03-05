import { Button, Table } from "antd";
import type { Author } from "../types/author";

interface Props {
  authors: Author[];
}

export default function AuthorTable({ authors }: Props) {
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
    },
    {
      title: "Ações",
      key: "actions",
      render: () => <Button type="link">Editar</Button>,
    },
  ];

  return <Table columns={Columns} dataSource={authors} rowKey="id" />;
}
