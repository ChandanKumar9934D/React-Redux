import React from 'react'
import ItemsList from './ItemsList'

const TodoItems = ({itemTodo}) => {
 
    let itemName=itemTodo
    
    return (
        <>
        {
            ItemsList.map((item)=>(
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <p className='col-md-3 col-sm-12 my-3 text-start'>{item.itemName}</p>
                    <p className='col-md-3 col-sm-12 my-3 text-start'>{item.date}</p>
                    <div className="col-md-2 col-sm-12 my-sm-3">
                        <button className='btn btn-danger rounded-3'>Delete</button>
                    </div>

                </div>
            </div>
            ))
}
        </>
    )
}

export default TodoItems
