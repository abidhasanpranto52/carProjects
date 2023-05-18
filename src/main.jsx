import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import Authprovider from './Providers/Authprovider';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <Authprovider>

    <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
  </div>
)
