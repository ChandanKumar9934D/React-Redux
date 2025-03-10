import React, { useRef } from "react";
import { useDispatch, useStore } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const inputNum=useRef()
  const handelIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handelDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handelPrivcy = () => {
    dispatch({ type: "PRIVCE" ,payload:{
      toggel:true
    }});
  };
  const handelAddition=()=>{
    dispatch({type:"ADDITION",
      payload:{
        number:Number(inputNum.current.value)
      }
    })
    inputNum.current.value=" "
  }
  const handelSubtract=()=>{
    dispatch({type:"SUBTRACT",
      payload:{
        number:Number(inputNum.current.value)
      }
    })
    inputNum.current.value=" "
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary "
          fdprocessedid="fq52vs"
          onClick={handelIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary "
          fdprocessedid="tjqnb"
          onClick={handelDecrement}
        >
          decrement
        </button>
        <button
          type="button"
          className="btn  btn-warning "
          fdprocessedid="tjqnb"
          onClick={handelPrivcy}
        >
          Counter Toggel
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input type="text" 
        className=" form-control w-50" 
        ref={inputNum}
        />
        <button
          type="button"
          className="btn btn-success px-4"
          fdprocessedid="tjqnb"
          onClick={handelAddition}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-success  px-4"
          fdprocessedid="tjqnb"
          onClick={handelSubtract}
        >
          Sub
        </button>
      </div>
    </>
  );
};

export default Button;
