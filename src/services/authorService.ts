import localforage from "localforage";
import type { Author, CreateAuthorDto } from "../types/author";
import { deleteBooksByAuthorId } from "./bookService";

const db = localforage.createInstance({
  name: "biblioteca",
  storeName: "authors",
});

export const addAuthor = async (data: CreateAuthorDto): Promise<Author> => {
  const authors = await getAuthors();
  const newAuthor = { id: crypto.randomUUID(), ...data };
  await db.setItem("list", [...authors, newAuthor]);
  return newAuthor;
};

export const deleteAuthor = async (id: string): Promise<void> => {
  const authors = await getAuthors();
  const updatedAuthors = authors.filter((author) => author.id !== id);
  await db.setItem("list", updatedAuthors);
  await deleteBooksByAuthorId(id);
};

export const getAuthors = async (): Promise<Author[]> => {
  const authors: Author[] = (await db.getItem<Author[]>("list")) ?? [];
  return authors;
};
