import React from 'react' 
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Store from './Components/Store/Store.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUS/ContactUs.jsx'
import StoreUserProduct from './Components/Store/StoreUserProduct.jsx'
import AuthContextProvider from './Context/AuthContext.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="user/:userId" element={<StoreUserProduct />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
    <RouterProvider router={router}/>
  </AuthContextProvider>
  </React.StrictMode>
)
