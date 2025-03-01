import React from "react";
import { useDispatch, useStore } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const handelIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handelDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="fq52vs"
          onClick={handelIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          fdprocessedid="tjqnb"
          onClick={handelDecrement}
        >
          decrement
        </button>
      </div>
    </>
  );
};

export default Button;
