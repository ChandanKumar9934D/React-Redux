import React, { useContext } from "react";
import { PostContext } from "../store/PostStore";

const Card = ({postItem}) => {
  const {postDelete}=useContext(PostContext)
  return (
    <>
      <div className="card m-2" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{postItem.title}</h5>
          <p className="card-text">
          {postItem.body}
          </p>
          <button className="btn btn-danger" onClick={()=>{postDelete(postItem.id)}}>delete</button>
          
        </div>
      </div>
    </>
  );
};

export default Card;
