import Heading from "./components/Heading"
import Mes from "./components/Mes"
import ShowItem from "./components/ShowItem"


function App() {
  let item=['dal','salad','Green Vagitable','Milk','Roti']


  return (
    <>
       <Heading/>
       <Mes food={item}/>
       <ShowItem food={item} />
    </>
  )
}

export default App
