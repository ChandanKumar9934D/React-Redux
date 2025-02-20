import React from 'react'
import { useState } from 'react'
const InputBtn = ({handelItem,handelDate,handelAdd}) => {
 

   
    return (
        <>
            <div className="container">
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-3 col-sm-12 my-3 ">
                        <input type="text"
                        className='p-2 '
                         placeholder='enter todo here'
                        //  value={item}
                        //  onChange={(e)=>{setItem(e.target.value)}}
                        onChange={handelItem}
                         />
                    </div>
                    <div className="col-md-3 col-sm-12 my-3">
                        <input type="date" 
                        className='p-2'
                        // value={date}
                        // onChange={(e)=>{setDate(e.target.value)}}
                        onChange={handelDate}
                        />
                    </div>
                    <div className="col-md-2 col-sm-12 my-sm-3">
                        <button className='btn btn-success rounded-3 px-4 py-2'
                        onClick={handelAdd}
                        >Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputBtn
