import { DeleteOutlined, EyeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip, type TableColumnsType } from "antd";
import { useDevice } from "../hooks/useDevice";
import type { Author } from "../types/author";

interface Props {
  authors: Author[];
  onDelete: (author: Author) => void;
  onView: (author: Author) => void;
}

export default function AuthorTable({ authors, onDelete, onView }: Props) {
  const { isMobile } = useDevice();

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
      responsive: ["md"],
      render: (email: string) => email ?? "-",
    },
    {
      title: "Ações",
      key: "actions",
      width: isMobile ? 110 : 140,
      render: (_: unknown, record: Author) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Tooltip
            title={isMobile ? null : "Visualizar detalhes"}
            color={"blue"}
          >
            <Button type="primary" onClick={() => onView(record)}>
              <EyeOutlined />
            </Button>
          </Tooltip>

          <Tooltip title={isMobile ? null : "Excluir autor"} color={"red"}>
            <Button type="dashed" danger onClick={() => onDelete(record)}>
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Table<Author>
      columns={Columns}
      dataSource={authors}
      rowKey="id"
      scroll={{ x: 420 }}
      size={isMobile ? "small" : "middle"}
      pagination={{
        pageSize: isMobile ? 5 : 10,
        responsive: true,
        itemRender: (page, type, originalElement) => {
          if (type === "page") {
            return (
              <button
                aria-label={`Ir para página ${page}`}
                style={{ background: "transparent", border: "none" }}
                type="button"
              >
                {page}
              </button>
            );
          }

          if (type === "prev") {
            return (
              <button
                aria-label="Página anterior"
                style={{ background: "transparent", border: "none" }}
                type="button"
              >
                <LeftOutlined />
              </button>
            );
          }

          if (type === "next") {
            return (
              <button
                aria-label="Próxima página"
                style={{ background: "transparent", border: "none" }}
                type="button"
              >
                <RightOutlined />
              </button>
            );
          }

          return originalElement;
        },
      }}
    />
  );
}
