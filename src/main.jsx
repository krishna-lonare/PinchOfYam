import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Usercomponents/Home';
import Products from './Usercomponents/Products';
import About from './Usercomponents/About';
import Categories from './Usercomponents/Categories.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

let router = createBrowserRouter([

  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {path:"products",
      element:<Products/>
    },
    {
      path:"about",
      element:<About/>
    },
     {path:"/Categories",
      element:<Categories />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
   </RouterProvider>
)
