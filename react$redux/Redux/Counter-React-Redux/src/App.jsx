import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Counter from './components/Counter'
import Header from './components/Header'
function App() {
  return (
   <>
  <div className="px-4 py-5 my-5 text-center">
    <Card>
   <Header/>
   <Counter/>
   <Button/>
   </Card>
    </div>

   </>
  )
}

export default App
