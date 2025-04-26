import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Dos from './dos.tsx'
import { Info } from './info.tsx'
import { MercList } from './mercList.tsx'
import { Citadels } from './citadels.tsx'
import { GameCombatInfo } from './gameCombatInfo.tsx'
import { MercFinder } from './mercFinder.tsx'

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
      },
      {
        path: 'citadels-catas',
        element: <Citadels />
      },
      {
        path: 'game-combat',
        element: <GameCombatInfo />
      },
      {
        path: 'merc-finder',
        element: <MercFinder />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
