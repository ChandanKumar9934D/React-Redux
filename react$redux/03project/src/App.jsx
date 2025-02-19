import Heading from "./components/Heading"
import Input from "./components/Input"
import Mes from "./components/Mes"
import ShowItem from "./components/ShowItem"

import "./App.css"
import { useState } from "react"
function App() {
  let [item, setFooditem] = useState([])
  let newItem = []
  const hendalData = (e) => {
    // console.log(e.key);
    if(e.key=='Enter'){
      let newFoodItem=e.target.value
      let newItem = [...item,newFoodItem]
      e.target.value=''
      setFooditem(newItem)
      
    }


}
return (
  <>
    <div className="container ">
      <div className="row">
        <div className="col-3 box mt-5 p-2">
          <Heading />
          <Input hendalData={hendalData} />
          <Mes food={item} />
          <ShowItem food={item} />


        </div>
      </div>
    </div>
  </>
)
}

export default App
