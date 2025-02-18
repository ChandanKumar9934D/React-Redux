import React from 'react'
import styls from './Button.module.css'
const Button = ({buttons}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={styls.allBtn}>
                            {
                                buttons.map((item, i) => (
                                    <button className={styls.button} key={i}>{item}</button>

                                ))
                            }
                            {/* <button className={styls.button}>C</button>
              <button className={styls.button}>1</button>
              <button className={styls.button}>2</button>
              <button className={styls.button}>+</button>
              <button className={styls.button}>+</button>
              <button className={styls.button}>+</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button
