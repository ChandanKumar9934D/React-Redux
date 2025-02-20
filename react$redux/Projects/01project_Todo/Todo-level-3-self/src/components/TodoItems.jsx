import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({itemTodo}) => {
    const handelDelete=(name,date)=>{
        let obj={
            itemName:name,
            date
        }
        console.log('delete');
        let newdatalist=[...itemTodo,obj]
    

     let orignam=newdatalist.map((item)=>(
       
      item.itemName==name

      
    
        
     ))
     console.log(orignam);
     
    }
 
    
    return (
        <>
        {
            itemTodo.map((item,index)=>(
           <TodoItem itemName={item.itemName} date={item.date} key={index} handelDelete={
            handelDelete
        } />
            ))
}
        </>
    )
}

export default TodoItems
