import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Uno from './uno.tsx'
import Dos from './dos.tsx'
import { Info } from './info.tsx'
import { MercList } from './mercList.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <div>
        Ooops! <Link to='/'>go back!</Link>
      </div>
    ),
    children: [
      { index: true, element: <Navigate to='/calc' replace={true} /> },
      // {
      //   path: 'v1',
      //   element: <Uno />
      // },
      {
        path: 'calc',
        element: <Dos />
      },
      {
        path: 'info',
        element: <Info />
      },
      {
        path: 'mercenaries',
        element: <MercList />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
