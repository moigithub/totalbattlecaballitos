import { Outlet, NavLink } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='app'>
      <ul className='navbar'>
        <h3 className='logo'>Troops calculation - totalbattle</h3>
        <div className='grow'></div>
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

      <footer style={{ padding: 10, height: 20 }}>
        pa' los eventos, ... usa caballitos si recien empiezas
      </footer>
    </div>
  )
}

export default App
