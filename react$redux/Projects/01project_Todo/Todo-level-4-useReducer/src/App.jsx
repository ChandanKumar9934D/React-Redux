import EmptyMes from "./components/EmptyMes";
import InputBtn from "./components/InputBtn";
import TodoItemContextProvider from "./components/store/ItemTodoStore";
import Tital from "./components/Tital";
import TodoItems from "./components/TodoItems";
import "./App.css"

function App() {
  return (
    <>
      <div className="container  ">
        <TodoItemContextProvider>
          <Tital />
          <InputBtn />
          <EmptyMes />
          <TodoItems />
        </TodoItemContextProvider>
      </div>
    </>
  );
}

export default App;
