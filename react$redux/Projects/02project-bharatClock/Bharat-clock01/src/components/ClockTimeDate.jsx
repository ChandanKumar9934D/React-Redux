import React, { useEffect, useState } from "react";
import "../App.css";
const ClockTimeDate = () => {
  // let date=new Date()

  const [date, setNewDate] = useState(new Date());
  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setNewDate(new Date());
    }, 1000);
    return () => {
      clearInterval(setIntervalId);
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p className="slog lead fw-normal fs-3">
              This is the currunt time : {date.toLocaleDateString()}-{" "}
              {date.toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockTimeDate;
