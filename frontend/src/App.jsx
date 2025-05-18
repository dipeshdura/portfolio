import React from 'react'
import "./App.scss";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './Layout/Layout';
const App = () => {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/contact",
          element:<Contact />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App