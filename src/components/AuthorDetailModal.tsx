import { UserOutlined } from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import { getFormattedDateTime } from "../helpers/getFormattedDate";
import DetailModal from "./DetailModal";
import type { Author } from "../types/author";

type AuthorDetailProps = {
  author: Author;
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthorDetailModal({
  author,
  isOpen,
  onClose,
}: AuthorDetailProps) {
  return (
    <DetailModal
      icon={<UserOutlined />}
      isOpen={isOpen}
      onClose={onClose}
      title="Detalhes do autor"
      content={
        <>
          <Text className="detail-modal__text">
            <strong>Nome:</strong> {author.name}
          </Text>

          {author.email && (
            <Text className="detail-modal__text">
              <strong>Email:</strong> {author.email}
            </Text>
          )}

          <Text className="detail-modal__text">
            <strong>Adcionado em:</strong>{" "}
            {getFormattedDateTime(author.createdAt)}
          </Text>
        </>
      }
    />
  );
}
