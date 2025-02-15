import React from 'react'
import "./TodoBootstrap.css";
import Tital from './Tital';
import InputBtn from './InputBtn';
import TodoItems from './TodoItems';
const TodoBootstrap = () => {

  return (
   <>
     <div className="container  ">
      <Tital/>
      <InputBtn/>
      <TodoItems />
    
    

    </div>

   </>
  )
}

export default TodoBootstrap
