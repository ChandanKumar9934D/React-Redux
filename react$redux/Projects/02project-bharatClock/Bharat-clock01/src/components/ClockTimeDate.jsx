import React from 'react'
import "../App.css"
const ClockTimeDate = () => {
    let date=new Date()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <p className="slog lead fw-normal fs-3">This is the currunt time : {date.toLocaleDateString()}- {date.toLocaleTimeString()}</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ClockTimeDate
