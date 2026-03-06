import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip, type TableColumnsType } from "antd";
import type { Author } from "../types/author";

interface Props {
  authors: Author[];
  onDelete: (author: Author) => void;
  onView: (author: Author) => void;
}

export default function AuthorTable({ authors, onDelete, onView }: Props) {
  const Columns: TableColumnsType<Author> = [
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
      render: (_: unknown, record: Author) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Tooltip title="Visualizar detalhes" color={"blue"}>
            <Button type="primary" onClick={() => onView(record)}>
              <EyeOutlined />
            </Button>
          </Tooltip>

          <Tooltip title="Excluir autor" color={"red"}>
            <Button type="dashed" danger onClick={() => onDelete(record)}>
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return <Table<Author> columns={Columns} dataSource={authors} rowKey="id" />;
}
