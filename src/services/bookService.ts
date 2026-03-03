import localforage from "localforage";

const db = localforage.createInstance({
  name: "biblioteca",
  storeName: "books",
});