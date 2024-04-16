import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';
import Login from './components/Login';
import Register from './components/Register';
import PropertyDetails from './components/PropertyDetails';
import AuthProvider from './components/Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')
      },
      {
        path:"/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/propertyDetails/:id",
        element:<PropertyDetails></PropertyDetails>,
        loader : ()=> fetch('/data.json'),
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
