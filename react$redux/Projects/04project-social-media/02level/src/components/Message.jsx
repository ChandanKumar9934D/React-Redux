import React, { useContext, useEffect } from "react";
import { PostContext } from "../store/PostStore";

const Message = ({selectTab}) => {
  const { fetchposts, PostList} = useContext(PostContext);

  return (
    <>
      <center>
        <div className="message mt-5 text-capitalize">
          <h1>there is not any posts</h1>
   
        </div>
      </center>
    </>
  );
};

export default Message;
