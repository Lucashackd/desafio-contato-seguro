export interface Author {
  id: string;
  name: string;
  email?: string;
  createdAt: Date;
}

export type CreateAuthorDto = Omit<Author, "id" | "createdAt">;
