import React from 'react'
import ReactDOM from 'react-dom/client'; // Importar de esta manera es más común
import ErrorPage from './components/ErrorPage';

import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import NuevoCliente, { action as nuevoClienteAction} from './pages/NuevoCliente';
import Layout from './components/Layout'
import Index , {loader as clientesLoader} from './pages/Index';
import EditarCliente, {loader as editarClienteLoader , action as editarClienteAction} from './pages/EditarCliente';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action : nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage/>
      }
    ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
