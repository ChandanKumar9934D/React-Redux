import React from 'react'
import styls from "./Input.module.css"
const Input = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={`${styls.main} col-3 px-4 mt-4`}>
                        <div className="inputFild">
                            <input type="text" className={styls.input} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Input
