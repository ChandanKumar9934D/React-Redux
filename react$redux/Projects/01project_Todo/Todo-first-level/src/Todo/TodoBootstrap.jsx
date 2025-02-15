import React from 'react'
import "./TodoBootstrap.css";
const TodoBootstrap = () => {
  let date="15/2/2025"
  let first='By Milk'
  let second="Go To College"
  return (
   <>
   <center>  
     <div className="container  ">
    <div className="row">
      <div className="col-12">
        <h1 className='text-center mt-5'>TODO APP</h1>
      </div>
    </div>
    <div className="row mt-3 d-flex justify-content-center">
      <div className="col-md-3 col-sm-12 my-3">
        <input type="text" placeholder='enter todo here' />
      </div>
      <div className="col-md-3 col-sm-12 my-3">
        <input type="date"/>
      </div>
      <div className="col-md-2 col-sm-12 my-sm-3">
      <button className='btn btn-success rounded-3'>Add</button>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
      <p className='col-md-3 col-sm-12 my-3 text-start'>{first}</p>
      <p className='col-md-3 col-sm-12 my-3 text-start'>{date}</p>
      <div className="col-md-2 col-sm-12 my-sm-3">
      <button className='btn btn-danger rounded-3'>Delete</button>
      </div>

    </div>
    <div className="row d-flex justify-content-center">
      <p className='col-md-3 col-sm-12 my-3 text-start'>{second}</p>
      <p className='col-md-3 col-sm-12 my-3 text-start'>{date}</p>
      <div className="col-md-2 col-sm-12 my-sm-3">
      <button className='btn btn-danger rounded-3'>Delete</button>
      </div>

    </div>
   </div>
   </center>

   </>
  )
}

export default TodoBootstrap
