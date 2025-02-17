import React from 'react'
import Item from './Item'
import "../App.css"

const ShowItem = ({food}) => {
  return (
    <>
      <div className="container">
      <div className="row  mt-3">
          <div className="col-6">
            <ul className="list-group ">
              {
                food.map((item,index)=>(
                 <Item key={index} item={item}/>
                ))
              }
            
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowItem
