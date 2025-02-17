import React from 'react'
import styles from "./Item.module.css"
const Item = ({item}) => {
  return (
    <>
       <li className={`${styles.items}   list-group-ite`} >{item}</li>
    </>
  )
}

export default Item
