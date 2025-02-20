import React from 'react'
import styls from "./Input.module.css"
import { useState } from 'react'
const Input = ({input,setInput}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={`${styls.main} col-3 px-4 mt-4`}>
                        <div className="inputFild">
                            <input type="text" className={styls.input} 
                            value={input}
                            readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Input
