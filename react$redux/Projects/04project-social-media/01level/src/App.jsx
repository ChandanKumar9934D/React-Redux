import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [selectTab, setSelectTab] = useState("home");
  
  return (
    <>
      <div className="main-container">
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab} />
        <div className="content">
          <Header />
          {selectTab !== "home" ? <CreatePost /> : <PostList />}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
