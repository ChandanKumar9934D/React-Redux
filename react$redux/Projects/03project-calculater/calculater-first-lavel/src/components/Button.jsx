import React from 'react'
import styls from './Button.module.css'
const Button = ({buttons,hendelClic}) => {
 
    return (
        <>
            
                    <div className="col">
                        <div className={styls.allBtn}>
                            {
                                buttons.map((item, i) => (
                                    <button className={styls.button} key={i}
                                    onClick={(event)=>{hendelClic(event,item)}}
                                    >{item}</button>

                                ))
                            }
                           
                        </div>
                  </div>
        </>
    )
}

export default Button
