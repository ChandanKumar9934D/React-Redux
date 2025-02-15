import React from 'react'
import "./Todo.css"
const Todo = () => {
    return (
        <div>
            <>
                <div className="container ">
                    <div className="title">
                        <h1 className="text-center mt-4">TODO APP</h1>
                    </div>
                    <div className="get">
                        <input type="text" placeholder="Enter Todo Here" />
                        <input type="date" />
                        <button className="btn btn-success ">Add</button>
                    </div>
                </div>


            </>
        </div>
    )
}

export default Todo
