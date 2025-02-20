import React from "react";
import "./TodoBootstrap.css";
import Tital from "./Tital";
import InputBtn from "./InputBtn";
import TodoItems from "./TodoItems";
import { useState } from "react";
const TodoBootstrap = () => {
  const ItemsList = [
    {
      itemName: "by milk",
      date: "15/02/2025",
    },
    {
      itemName: "by age",
      date: "15/02/2025",
    },
    {
      itemName: "go to school",
      date: "15/02/2025",
    },
  ];

  let [itemList, setItemList] = useState(ItemsList);

  const handelAdd = (item, date) => {
    let newObject = {
      itemName: item,
      date: date,
    };
    let newItemList = [...ItemsList, newObject];
    setItemList(newItemList);
  };
  const handelDelete = (name, date) => {
    console.log(name, date);
    let a = itemList.filter((item) => item.itemName !== name);
    let newItem = [...a];
    setItemList(newItem);
  };
  return (
    <>
      <div className="container  ">
        <Tital />
        <InputBtn handelAdd={handelAdd} />
        <TodoItems itemTodo={itemList} handelDelete={handelDelete} />
      </div>
    </>
  );
};

export default TodoBootstrap;
