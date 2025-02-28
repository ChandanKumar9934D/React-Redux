import React, { useContext } from "react";
import { PostContext } from "../store/PostStore";
import { MdDelete } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Card = ({ postItem }) => {
  const { postDelete } = useContext(PostContext);
  
  return (
    <>
      <div className="card m-4" style={{ width: "30rem" }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"  onClick={() => {
              postDelete(postItem.id);
            }}>
          <MdDelete size={20}/>
        </span>
        <div className="card-body">
          <h5 className="card-title">{postItem.title}</h5>
          <p className="card-text">{postItem.body}</p>
          {postItem.tags.map((tags,index) => (
            <span key={index} className="badge bg-primary px-3 bage">{tags}</span>
          ))}
          <div className="alert  my-2 text-capitalize" role="alert">
            the post reaction is :<AiOutlineLike color="red" /> {postItem.reactions.likes}   <AiOutlineDislike /> {postItem.reactions.dislikes}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
