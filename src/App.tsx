import { Fragment, useEffect } from 'react'
import { Outlet, Link, NavLink, redirect } from 'react-router-dom'

import './App.css'
import { Info } from './info'

function App() {
  return (
    <Fragment>
      <ul className='navbar'>
        <li>
          <NavLink to={`/v1`}>Version 1</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to={`/v2`}>Version 2</NavLink>
        </li>
      </ul>

      <Outlet />
      <Info />
    </Fragment>
  )
}

export default App
