import { Outlet, NavLink } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='app'>
      <ul className='navbar'>
        <li>
          <h3 className='logo'>Troops calculation - totalbattle</h3>
        </li>
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

      <footer style={{ padding: 30 }}>
        work in progress, if something doesnt work.. ignore it
      </footer>
    </div>
  )
}

export default App
