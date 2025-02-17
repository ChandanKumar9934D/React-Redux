import React from 'react'
import "./TodoBootstrap.css";
import Tital from './Tital';
import InputBtn from './InputBtn';
import TodoItems from './TodoItems';
const TodoBootstrap = () => {
  const ItemsList = [
    {
      itemName: "by milk",
      date: "15/02/2025"
    },
    {
      itemName: "by age",
      date: "15/02/2025"
    },
    {
      itemName: "go to school",
      date: "15/02/2025"
    },


  ]
  return (
    <>
      <div className="container  ">
        <Tital />
        <InputBtn />
        <TodoItems itemTodo={ItemsList}/>



      </div>

    </>
  )
}

export default TodoBootstrap
