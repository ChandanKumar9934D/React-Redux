import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const counter=useSelector((store)=>store.counter
    )
    
  return (
    <>
     <div class="col-lg-6 mx-auto">
     <p class="lead mb-4 text-capitalize">counter value :{counter} </p>
   </div>
      
    </>
  )
}

export default Counter
