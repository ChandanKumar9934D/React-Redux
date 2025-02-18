import styls from "./App.module.css"
import Button from "./Button"
import Input from "./Input"
function App() {
  let buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9','0','.']
  return (
    <>
   
      <div className="container">
        <div className="row">
          <div className={`${styls.main} col-6 px-4 mt-4`}>
           <Input/>
           <Button buttons={buttons} />
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App
