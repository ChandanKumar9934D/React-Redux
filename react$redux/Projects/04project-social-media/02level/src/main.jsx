import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'

// const router=createRoot
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:'/',
      element:<PostList/>
    },
    {
      path:'create-post',
      element:<CreatePost/>
    }
    
  ]
},

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
