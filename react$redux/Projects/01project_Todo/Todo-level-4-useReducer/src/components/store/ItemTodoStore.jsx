import { createContext, useReducer } from "react";

export const ItemsListStore = createContext({
  itemList: [],
  handelAdd: () => {},
  handelDelete: () => {},
});
const reducer = (state, action) => {
  console.log(action);
  const { type, payload } = action;
  let newTodoItem = state;
  if (type === "NEW_ITEM") {
    newTodoItem = [...state, { itemName: payload.item, date: payload.date }];
  } else if (type === "DELETE_ITEM") {
    newTodoItem = state.filter((data) => data.itemName !== payload.item);
  }
  return newTodoItem;
};
const TodoItemContextProvider=({children})=>{
    const [itemList, todoReducer] = useReducer(reducer, []);
    const handelAdd = (item, date) => {
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          item: item,
          date: date,
        },
      };
      todoReducer(newItemAction);
    };
    const handelDelete = (name, date) => {
      const newTodoItem = {
        type: "DELETE_ITEM",
        payload: {
          item: name,
          date,
        },
      };
      todoReducer(newTodoItem);
    };
  return (
    <>
    <ItemsListStore.Provider value={{ itemList, handelAdd, handelDelete }}>
    {children}
    </ItemsListStore.Provider>
    </>
  )
}
export default TodoItemContextProvider;