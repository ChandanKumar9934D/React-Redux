import React from "react";
import "./TodoBootstrap.css";
import Tital from "./Tital";
import InputBtn from "./InputBtn";
import TodoItems from "./TodoItems";
import EmptyMes from "./EmptyMes";
import TodoItemContextProvider from "./store/ItemTodoStore";

const TodoBootstrap = () => {
  return (
    <>
      <div className="container  ">
        <TodoItemContextProvider>
          <Tital />
          <InputBtn />
          <EmptyMes />
          <TodoItems />
        </TodoItemContextProvider>
      </div>
    </>
  );
};

export default TodoBootstrap;
