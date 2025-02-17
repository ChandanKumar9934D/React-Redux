import React from 'react'

const Mes = ({food}) => {
    let mes=food==0?<h3>i am hungry</h3>:null
  return (
    <>
       <div className="container">
        <div className="row">
            <div className="col-sm-12">
            {mes}
            </div>
        </div>
       </div>
    </>
  )
}

export default Mes
