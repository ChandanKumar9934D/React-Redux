import React, { useState } from 'react'
import Item from './Item'
import "../App.css"
import Button from '../../../Projects/03project-calculater/calculater-first-lavel/src/components/Button'

const ShowItem = ({food}) => {
  let [status,setStatus]=useState([])

  const hendalBtn = (e) => {
    console.log(e);
    // setStatus(!status)
    let newdata=[...status,e]
    setStatus(newdata)

  }
  return (
    <>
      
          <div >
            <ul className="list-group ">
              {
                food.map((item,index)=>(
                 <Item key={index} item={item} 
                 hendalBtn={()=>{hendalBtn(item)}} 
                 status={status.includes(item)} />
                
                ))
              }
            
            </ul>
          </div>
       
    </>
  )
}

export default ShowItem
