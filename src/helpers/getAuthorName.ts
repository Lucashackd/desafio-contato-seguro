import type { Author } from "../types/author";

export default function getAuthorName(
  authors: Author[],
  authorId: string,
): string {
  return authors.find((author) => author.id === authorId)?.name ?? "-";
}
