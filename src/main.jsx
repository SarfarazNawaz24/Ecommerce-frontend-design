import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Route from './Components/Route'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Route/>,
      children: [
        {
          path: '',
          element: <Home/>
        }
      ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
