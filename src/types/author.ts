export interface Author {
  id: string;
  name: string;
  email?: string;
}

export type CreateAuthorDto = Omit<Author, "id">;
