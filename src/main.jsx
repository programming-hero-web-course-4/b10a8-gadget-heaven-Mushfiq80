import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './component/Home/Home';
import ProductDetails from './component/ProductDetails/ProductDetails';
import DashBoard from './component/DashBoard/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/product.json'),
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        loader: () => fetch('/product.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
