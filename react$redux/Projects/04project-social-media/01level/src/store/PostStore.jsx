import React, { createContext, useReducer, useState } from "react";
export const PostContext = createContext({
  PostList: [],
  postCreate: () => {},
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
      // console.log(action);

      newPostItem = [
       
        {
          id: action.paylod.id,
          title: action.paylod.title,
          body: action.paylod.content,
          reaction: action.paylod.reaction,
          userId: action.paylod.userId,
          tags: action.paylod.tags,
        },
        ...cruntList 
      ];

      return newPostItem;
    }
    return cruntList;
  };
  const [PostList, dispach] = useReducer(reducer, DEFAULT_POST);

  const postCreate = ({ userId, title, tags, content, reaction }) => {
    dispach({
      type: "CREATE_POST",
      paylod: { id: Date.now(), userId, title, tags, content, reaction },
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
  return (
    <PostContext.Provider value={{ PostList, postCreate, postDelete }}>
      {children}
    </PostContext.Provider>
  );
};
const DEFAULT_POST = [
  {
    id: 1,
    title: "first",
    body: "it is my first post for my social media project",
    reaction: 5,
    userId: "user1",
    tags: ["project", "first"],
  },
  {
    id: 2,
    title: "second",
    body: "it is my first post for my social media project",
    reaction: 15,
    userId: "user2",
    tags: ["project", "first"],
  },
];
export default PostStore;
