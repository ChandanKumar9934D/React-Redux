import React, { createContext, useReducer, useState } from "react";
export const PostContext = createContext({
  PostList: [],
  postCreate: () => {},
  fetchposts: () => {},
  postDelete: () => {},
});

const PostStore = ({ children }) => {
  //   const [PostList, setPostList] = useState([]);
  const reducer = (cruntList, action) => {
    let newPostItem = cruntList;
    if (action.type === "DELETE_POST") {
      newPostItem = cruntList.filter((item) => item.id !== action.paylod.id);
      return newPostItem;
    } else if (action.type === "CREATE_POST") {
      // console.log(action.paylod.reactions);
      
      newPostItem = [
       
        {
          id: action.paylod.id,
          title: action.paylod.title,
          body: action.paylod.content,
          reactions:{
            dislikes:action.paylod.reactions.dislikes,
            likes:action.paylod.reactions.likes
          },
          userId: action.paylod.userId,
          tags: action.paylod.tags,
        },
        ...cruntList 
      ];

      return newPostItem;
    }else if(action.type==="ADD_POSTS"){
      
      return newPostItem=action.paylod
    }
    return cruntList;
  };
  const [PostList, dispach] = useReducer(reducer, []);
  

  const postCreate = ({ userId, title, tags, content, Reaction }) => {
   const reactions={
      likes:Reaction,
      dislikes:Reaction,
    }
    console.log(reactions);
    
    dispach({
      type: "CREATE_POST",
      paylod: { id: Date.now(), userId, title, tags, content, reactions }
    });
    console.log("postCreated");
  };
  const postDelete = (id) => {
    dispach({
      type: "DELETE_POST",
      paylod: {
        id,
      },
    });
  };
  const fetchposts=(data)=>{
    dispach({
      type:"ADD_POSTS",
      paylod:data

      
    })

  }
  
  return (
    <PostContext.Provider value={{ PostList, postCreate,fetchposts, postDelete }}>
      {children}
    </PostContext.Provider>
  );
};
// fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(console.log);

export default PostStore;
