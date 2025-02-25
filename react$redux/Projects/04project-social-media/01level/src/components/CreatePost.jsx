import React, { useContext, useRef } from "react";
import { PostContext } from "../store/PostStore";

const CreatePost = () => {
  const{postCreate}=useContext(PostContext)
  const title=useRef()
  const content=useRef()
  const id=useRef()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {" "}
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                 Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={title}
                />
             
              </div>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                 Id
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="id"
                  aria-describedby="emailHelp"
                  ref={id}
                />
             
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Post Content
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  ref={content}
                />
              </div>
             
              <button type="submit" className="btn btn-primary" onClick={()=>{postCreate(title,content,id)}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
