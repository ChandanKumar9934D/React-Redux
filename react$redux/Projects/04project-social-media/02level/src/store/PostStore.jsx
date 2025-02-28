import React, { createContext, useEffect, useReducer, useState } from "react";
export const PostContext = createContext({
  PostList: [],
  postCreate: () => {},
  fetchposts: () => {},
  postDelete: () => {},
  
});

const PostStore = ({ children }) => {
  //   const [PostList, setPostList] = useState([]);
    const [spinner, setSpinner] = useState(false);
  
  const reducer = (cruntList, action) => {
    let newPostItem = cruntList;
    if (action.type === "DELETE_POST") {
      newPostItem = cruntList.filter((item) => item.id !== action.paylod.id);
      return newPostItem;
    } else if (action.type === "CREATE_POST") {
   

      newPostItem = [action.paylod, ...cruntList];

      return newPostItem;
    } else if (action.type === "ADD_POSTS") {
      return (newPostItem = action.paylod);
    }
    return cruntList;
  };
  const [PostList, dispach] = useReducer(reducer, []);

  const postCreate = (obj) => {
    dispach({
      type: "CREATE_POST",
      paylod: obj,
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
  const fetchposts = (data) => {
    dispach({
      type: "ADD_POSTS",
      paylod: data,
    });
  };
  useEffect(() => {
    setSpinner(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        fetchposts(obj.posts);

        setSpinner(false);
      });
      return ()=>{
        controller.abort()
      }
  }, []);
  return (
    <PostContext.Provider
      value={{ PostList, postCreate, fetchposts, postDelete,setSpinner,spinner }}
    >
      {children}
    </PostContext.Provider>
  );
};


export default PostStore;
