import React from "react";
import "./TodoBootstrap.css";
import Tital from "./Tital";
import InputBtn from "./InputBtn";
import TodoItems from "./TodoItems";
import { useState } from "react";
import EmptyMes from "./EmptyMes";
import { ItemsListStore } from "./store/ItemTodoStore";
// import { handelAdd, itemList } from "./store/FunctionTodo";
const TodoBootstrap = () => {
  let [itemList, setItemList] = useState([]);

  const handelAdd = (item, date) => {
    setItemList((prev)=>[
      ...prev,
      {
        itemName: item,
        date,
      },
    ]);
  };
  const handelDelete = (name, date) => {
    console.log(name, date);
    let a = itemList.filter((item) => item.itemName !== name);

    setItemList(a);
  };
  return (
    <>
      <div className="container  ">
        <ItemsListStore.Provider value={{ itemList, handelAdd, handelDelete }}>
          <Tital />
          <InputBtn />
          <EmptyMes />
          <TodoItems />
        </ItemsListStore.Provider>
      </div>
    </>
  );
};

export default TodoBootstrap;
