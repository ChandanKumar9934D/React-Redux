import React from 'react'
import style from './Input.module.css'
const Input = ({hendalData}) => {
  return (
    
    <>
      <input type="text"
       placeholder='enter here' 
      className={style.inputFild} 
      onKeyDown={hendalData}
      />
    </>
  )
}

export default Input
