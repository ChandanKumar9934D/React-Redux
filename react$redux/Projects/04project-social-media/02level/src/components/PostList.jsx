import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostContext } from "../store/PostStore";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

const PostList = ({ selectTab }) => {
  // const [spinner, setSpinner] = useState(false);

  const { PostList, fetchposts,spinner } = useContext(PostContext);


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
