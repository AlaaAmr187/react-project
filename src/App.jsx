import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Notfound from './components/Notfound/Notfound'

function App() {
  const [count, setCount] = useState(0)

  const router=createBrowserRouter([{
    path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>}
      ,{path:'/about',element:<About/>}
      ,{path:'/contact',element:<Contact/>}
      ,{path:'/portfolio',element:<Portfolio/>}
      ,{path:'*',element:<Notfound/>}
    ]
  }])
  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}

export default App
