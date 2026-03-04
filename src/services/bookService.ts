import localforage from "localforage";
import type { Book, CreateBookDto } from "../types/book";

const db = localforage.createInstance({
  name: "biblioteca",
  storeName: "books",
});

export const addBook = async (data: CreateBookDto): Promise<Book> => {
  const books = await getBooks();
  const newBook = { id: crypto.randomUUID(), ...data };
  await db.setItem("list", [...books, newBook]);
  return newBook;
};

export const deleteBook = async (id: string): Promise<void> => {
  const books = await getBooks();
  const updatedBooks = books.filter((book) => book.id !== id);
  await db.setItem("list", updatedBooks);
};

export const getBooks = async (): Promise<Book[]> => {
  const books: Book[] = (await db.getItem<Book[]>("list")) ?? [];
  return books;
};
