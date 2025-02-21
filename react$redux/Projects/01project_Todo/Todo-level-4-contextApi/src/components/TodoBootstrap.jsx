import React from "react";
import "./TodoBootstrap.css";
import Tital from "./Tital";
import InputBtn from "./InputBtn";
import TodoItems from "./TodoItems";
import { useState } from "react";
import EmptyMes from "./EmptyMes";
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
    // let newItemList = [...itemList,{
    //   itemName: item,
    //   date: date,
    // } ];
    // setItemList(newItemList);
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
        <Tital />
        <InputBtn handelAdd={handelAdd} />
        {itemList == 0 && <EmptyMes />}
        <TodoItems itemTodo={itemList} handelDelete={handelDelete} />
      </div>
    </>
  );
};

export default TodoBootstrap;
