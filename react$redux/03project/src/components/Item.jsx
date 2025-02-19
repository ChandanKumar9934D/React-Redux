import React from 'react'
import styles from "./Item.module.css"


const Item = ({ item ,hendalBtn,status}) => {

  return (
    <>
      <li className={`${styles.items} list-group-item ${status==true&&"active"} `} >{item}
        <button className={`${styles.byButton} btn btn-success `} onClick={hendalBtn}>By</button>
      </li>

    </>
  )
}

export default Item
