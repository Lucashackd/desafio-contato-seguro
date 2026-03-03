export interface Book {
  id: string;
  title: string;
  author_id: string;
  pages?: number;
}

export type CreateBookDto = Omit<Book, "id">;
