import {
  DeleteOutlined,
  EyeOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Table, Tooltip, type TableColumnsType } from "antd";
import { getFormattedDate } from "../helpers/getFormattedDate";
import { useDevice } from "../hooks/useDevice";
import type { Author } from "../types/author";
import "./AuthorTable.css";

type AuthorTableProps = {
  authors: Author[];
  onDelete: (author: Author) => void;
  onView: (author: Author) => void;
};

export default function AuthorTable({
  authors,
  onDelete,
  onView,
}: AuthorTableProps) {
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
      title: "Data da Adição",
      dataIndex: "createdAt",
      key: "createdAt",
      responsive: ["xl"],
      width: 120,
      render: (createdAt: string) => getFormattedDate(createdAt),
    },
    {
      title: "Ações",
      key: "actions",
      width: isMobile ? 110 : 140,
      render: (_: unknown, record: Author) => (
        <div className="author-table__actions">
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
      className="author-table"
      columns={Columns}
      dataSource={authors}
      rowKey="id"
      scroll={{ x: 420 }}
      size={isMobile ? "small" : "middle"}
      pagination={{
        className: "author-table__pagination",
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
    />
  );
}
