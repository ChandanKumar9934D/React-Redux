import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const store=useSelector((store)=>store)
    console.log(store);
    
    
    
    
  return (
    <>
     <div class="col-lg-6 mx-auto">
      {store.toggel?<p className="lead mb-4 text-capitalize">counter is private</p>: <p className="lead mb-4 text-capitalize">counter value :{store.counter} </p>}
    
   </div>
      
    </>
  )
}

export default Counter
