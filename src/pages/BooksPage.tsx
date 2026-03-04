import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

export default function BooksPage() {
  return (
    <section style={{ padding: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <Title level={2} style={{ margin: 0, fontWeight: 800 }}>
            Livros
          </Title>
          <Text type="secondary">
            Gerencie o registro de todos os livros disponíveis na biblioteca,
            com suas respectivas informações.
          </Text>
        </div>
        <Button
          type="primary"
          icon={<UserAddOutlined />}
          size="large"
          onClick={() =>
            alert("Funcionalidade de adicionar livro ainda não implementada")
          }
          style={{ borderRadius: 8, fontWeight: 600 }}
        >
          Adicionar Livro
        </Button>
      </div>
    </section>
  );
}
