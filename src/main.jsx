import React from 'react'
import ReactDOM from 'react-dom/client'; // Importar de esta manera es más común

import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import NuevoCliente from './pages/NuevoCliente';
import Layout from './components/Layout'
import Index from './pages/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>
      }
    ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
