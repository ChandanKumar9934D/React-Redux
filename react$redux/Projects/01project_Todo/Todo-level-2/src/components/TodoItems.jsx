import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({itemTodo}) => {
 
    
    return (
        <>
        {
            itemTodo.map((item,index)=>(
           <TodoItem itemName={item.itemName} date={item.date} key={index} />
            ))
}
        </>
    )
}

export default TodoItems
