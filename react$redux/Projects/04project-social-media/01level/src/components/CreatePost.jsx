import React, { useContext, useRef } from "react";
import { PostContext } from "../store/PostStore";

const CreatePost = () => {
  const{postCreate}=useContext(PostContext)
  const title=useRef('')
  const content=useRef('')
  const tag=useRef('')
  const userId=useRef()
  const Reaction=useRef()
 
  const handelCreate=()=>{
 

    const obj={
      title:title.current.value,
      content:content.current.value,
      userId:userId.current.value,
      Reaction:Reaction.current.value,
    
      tags:(tag.current.value).split(' ')
    }
    title.current.value=''
    content.current.value=''
    tag.current.value=''
    userId.current.value=''
    Reaction.current.value=''
    postCreate(obj)

  }
  
  

  
  
  return (
    <>
      <div className="container mx-5 my-3">
        <div className="row">
          <div className="col-lg-5">
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
                <label htmlFor="userId" className="form-label">
                userId
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={userId}
                />
             
              </div>
              <div className="mb-3">
                <label htmlFor="Content" className="form-label">
                  Post Content
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="Content"
                  ref={content}
                  rows={4}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Reaction" className="form-label">
                 Reaction
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Reaction"
                  aria-describedby="emailHelp"
                  ref={Reaction}
                />
             
              </div>
             
              <div className="mb-3">
                <label htmlFor="idt" className="form-label">
                 tags
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idt"
                  aria-describedby="emailHelp"
                  ref={tag}
                />
             
              </div>
             
              <button type="submit" className="btn btn-primary" onClick={handelCreate}>
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
