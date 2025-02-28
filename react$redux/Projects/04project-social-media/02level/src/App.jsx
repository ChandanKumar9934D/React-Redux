import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostStore from "./store/PostStore";

function App() {
  const [selectTab, setSelectTab] = useState("home");
  
  
  return (
    <>
        <PostStore>
      <div className="main-container">
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab} />
        <div className="content">
          <Header />
          {selectTab !== "home" ? <CreatePost /> : <PostList selectTab={selectTab} />}
          <Footer />
        </div>
      </div>
        </PostStore>
    </>
  );
}

export default App;
