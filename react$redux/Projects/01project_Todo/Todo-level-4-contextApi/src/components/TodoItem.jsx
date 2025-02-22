import React, { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { ItemsListStore } from './store/ItemTodoStore';
const TodoItem = ({itemName,date}) => {
  const {handelDelete}=useContext(ItemsListStore)
  
  return (
    <>
       <div className="container">
                <div className="row d-flex justify-content-center">
                    <p className='col-md-3 col-4 my-3 text-start'>{itemName}</p>
                    <p className='col-md-3 col-4 my-3 text-start'>{date}</p>
                    <div className="col-md-2 col-3 my-sm-3">
                        <button className='btn btn-danger rounded-3' onClick={()=>{handelDelete(itemName,date)}}><MdDeleteOutline /></button>
                    </div>

                </div>
            </div>
    </>
  )
}

export default TodoItem
