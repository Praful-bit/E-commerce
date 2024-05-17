/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import AuthContextProvider from "./Context/AuthContext.jsx";

const Layout =lazy(()=>import('./Layout.jsx'))
const Store = lazy(() => import("./Components/Store/Store.jsx"));
const About = lazy(() => import("./Components/About/About.jsx"));
const ContactUs = lazy(()=> import('./Components/ContactUS/ContactUs.jsx'))
const LoginPage =lazy(()=>import('./Components/Login&SignUp/LoginPage.jsx'))
const Home =lazy(()=>import('./Components/Home/Home.jsx'))
const ProfilePassChange =lazy(()=> import('./Components/Profile/ProfilePassChange.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<p>Loading...</p>}>
          <Layout />
        </Suspense>
      }
      loader={() => import("./Layout.jsx")}
    >
      <Route
        path="/login"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <LoginPage />
          </Suspense>
        }
        loader={() => import("./Components/Login&SignUp/LoginPage.jsx")}
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <ProfilePassChange />
          </Suspense>
        }
        loader={() => import("./Components/Profile/ProfilePassChange.jsx")}
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        }
        loader={() => import("./Components/Home/Home.jsx")}
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Store />
          </Suspense>
        }
        loader={() => import("./Components/Store/Store.jsx")}
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        }
        loader={() => import("./Components/About/About.jsx")}
      />
      <Route
        path="/contactUs"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <ContactUs />
          </Suspense>
        }
        loader={() => import("./Components/ContactUS/ContactUs.jsx")}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
