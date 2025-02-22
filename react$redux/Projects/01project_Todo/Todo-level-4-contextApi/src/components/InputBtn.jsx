import React, { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { ItemsListStore } from "./store/ItemTodoStore";
const InputBtn = () => {
  const {handelAdd} = useContext(ItemsListStore);
  let todoNameElement = useRef();
  let dueDateElement = useRef();
  const handaleClick = () => {
    let item = todoNameElement.current.value;
    let date = dueDateElement.current.value;
    handelAdd(item, date);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-3 col-sm-12 my-3 ">
            <input
              type="text"
              className="p-2 "
              placeholder="enter todo here"
              ref={todoNameElement}
            />
          </div>
          <div className="col-md-3 col-sm-12 my-3">
            <input type="date" className="p-2" ref={dueDateElement} />
          </div>
          <div className="col-md-2 col-sm-12 my-sm-3">
            <button
              className="btn btn-success rounded-3 px-4 py-2"
              onClick={handaleClick}
            >
              <IoIosAddCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBtn;
