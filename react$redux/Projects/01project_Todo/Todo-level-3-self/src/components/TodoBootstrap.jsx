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
  let [item, setItem] = useState("");
  let [date, setDate] = useState("");
  let [itemList, setItemList] = useState(ItemsList);
  let handelItem = (e) => {
   setItem(e.target.value)
  };
  let handelDate = (e) => {
   setDate(e.target.value)
  };
  const handelAdd=()=>{
    let newObject={
      itemName:item,
      date:date
    }
    let newItemList=[...ItemsList,newObject]
    setItemList(newItemList)
  }
  return (
    <>
      <div className="container  ">
        <Tital />
        <InputBtn handelItem={handelItem} handelDate={handelDate}  handelAdd={handelAdd}/>
        <TodoItems itemTodo={itemList} setItemList />
      </div>
    </>
  );
};

export default TodoBootstrap;
