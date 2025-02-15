import React, { useState } from 'react'

function Count() {
    let [num,setNum]=useState(0)
    const add=()=>{
        setNum((e)=>(e+1))
        
    }
    const min=()=>{
        if(num>=1){

            setNum(num-1)
        }else{
            return
        }
    }
  return (
    <div>
        <h1>{num}</h1>
      <button onClick={add}>add</button>
      <button onClick={min}>min</button>
    </div>
  )
}

export default Count
