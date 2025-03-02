import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const store=useSelector((store)=>store.Counter)
    const Privacy=useSelector((store)=>store.Privacy)
  return (
    <>
      <div className="col-lg-6 mx-auto">
      {Privacy?<p className="lead mb-4 text-capitalize">counter is private</p>: <p className="lead mb-4 text-capitalize">counter value :{store.counter} </p>}
      {/* <p className="lead mb-4 text-capitalize">counter value :{store} </p> */}
    
   </div> 
      
    </>
  )
}

export default Counter
