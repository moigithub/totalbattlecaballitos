import { Outlet, NavLink } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='app'>
      <ul className='navbar'>
        <li>
          <NavLink to={`/v1`}>Version 1</NavLink>
        </li>
        <li>
          <NavLink to={`/v2`}>Version 2</NavLink>
        </li>
        <li>
          <NavLink to={`/info`}>Info</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default App
