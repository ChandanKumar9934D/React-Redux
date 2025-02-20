import { useState } from "react";
import styls from "./App.module.css";
import Button from "./components/Button";
import Input from "./components/Input";
function App() {
  let buttons = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];
  let [input, setInput] = useState("");
  const hendelClic = (event, item) => {
    console.log(item);
    
    if (item === "C") {
      setInput(" ");
    }
    else if (item === "=") {
      setInput(eval(input));
    } else {
      item += input;
      setInput(item);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`${styls.main} col-3 px-4 mt-4`}>
            <Input setInput={setInput} input={input} />
            <Button buttons={buttons} hendelClic={hendelClic} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
