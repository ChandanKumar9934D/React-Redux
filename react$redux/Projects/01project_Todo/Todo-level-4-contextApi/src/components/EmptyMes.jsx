import React, { useContext } from 'react'
import { ItemsListStore } from './store/ItemTodoStore'

const EmptyMes = () => {
  const {itemList}=useContext(ItemsListStore)
  return itemList.length == 0 && <h3 className='text-center mt-2 text-capitalize'>happy food and helthy food</h3>
      
 
}

export default EmptyMes
