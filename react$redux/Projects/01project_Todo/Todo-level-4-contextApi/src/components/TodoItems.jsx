import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { ItemsListStore } from './store/ItemTodoStore'

const TodoItems = () => {
    const {itemList}= useContext(ItemsListStore)
   
    
    
    return (
        <>
        {
            itemList.map((item,index)=>(
           <TodoItem itemName={item.itemName} date={item.date} key={index} />
            ))
}
        </>
    )
}

export default TodoItems
