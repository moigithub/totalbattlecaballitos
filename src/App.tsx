import { Outlet } from 'react-router-dom'

import './App.css'
// import { Disclaimer } from './disclaimer'
import { Fragment, useEffect } from 'react'
import { decodeAndLoadArmySetup } from './utils'
import reactGA from 'react-ga4'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

reactGA.initialize('G-6K9SG0Z6WS')

function App() {
  useEffect(() => {
    const locaHash = location.hash
    if (locaHash === '') {
      //check if we have anything on localstorage
      console.log('loading from localstorage')
      const storedValue = localStorage.getItem('tbstacks')
      if (storedValue) {
        // Helper function to decode the hash
        decodeAndLoadArmySetup(storedValue)
      }
    }
  }, [])

  return (
    <nav className='z-10'>
      <Navbar fluid rounded>
        <NavbarBrand>
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            Troops Counter
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href='/calc'>Stack Calc</NavbarLink>
          <NavbarLink href='/info'>info</NavbarLink>
          <NavbarLink href='/mercenaries'>Mercenaries</NavbarLink>
          <NavbarLink href='/citadels-catas'>Citadels catapults</NavbarLink>
          <NavbarLink href='/game-combat'>Game combat</NavbarLink>
          <NavbarLink href='/merc-finder'>Game combat</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <Outlet />

      {/* <Disclaimer /> */}
    </nav>
  )
}

export default App
