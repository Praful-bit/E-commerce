import React from 'react' 
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Store from './Components/Store/Store.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUS/ContactUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
