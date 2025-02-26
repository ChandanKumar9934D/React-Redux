import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostContext } from "../store/PostStore";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

const PostList = ({ selectTab }) => {
  const [spinner, setSpinner] = useState(false);

  const { PostList, fetchposts } = useContext(PostContext);
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
    <>
      {spinner && <LoadingSpinner />}
      {!spinner && PostList.length === 0 && <Message />}
      {!spinner &&
        PostList.map((postItem) => (
          <Card key={postItem.id} postItem={postItem} />
        ))}
    </>
  );
};

export default PostList;
