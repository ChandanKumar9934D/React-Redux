import React, { useContext } from 'react'
import Card from './Card'
import { PostContext } from '../store/PostStore'

const PostList = () => {
  const {PostList}=useContext(PostContext)
    
  return (
    <>
    {
      PostList.map((postItem)=> <Card key={postItem.id} postItem={postItem}/>)
    }
      
    </>
  )
}

export default PostList
