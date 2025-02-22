import { createContext } from "react";

export const ItemsListStore = createContext({
  itemList: [],
  handelAdd: () => {},
  handelDelete: () => {},
});