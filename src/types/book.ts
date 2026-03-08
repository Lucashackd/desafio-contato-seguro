export interface Book {
  id: string;
  title: string;
  author_id: string;
  pages?: number;
  createdAt: Date;
}

export type CreateBookDto = Omit<Book, "id" | "createdAt">;
