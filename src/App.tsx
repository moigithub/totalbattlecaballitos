import { Outlet } from 'react-router-dom'

import './App.css'
// import { Disclaimer } from './disclaimer'
import { useEffect } from 'react'
import { decodeAndLoadArmySetup } from './utils'
import reactGA from 'react-ga4'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

reactGA.initialize('G-6K9SG0Z6WS')

function subtractDates(date1: Date, date2: Date) {
  const oneDay = 24 * 60 * 60 * 1000 // milliseconds in one day
  const diffInMilliseconds = date1.getTime() - date2.getTime()
  return Math.round(diffInMilliseconds / oneDay) // Convert milliseconds to days
}

// const date1 = new Date('2023-07-15');
// const date2 = new Date('2023-07-10');
// console.log(subtractDates(date1, date2));

function App() {
  useEffect(() => {
    const url = location.href
    const multipleHttps = url.match(/https/g)?.length ?? 0
    const blackListUrl = ['web.archive.org']
    const saw = localStorage.getItem('sawz')

    if (!saw) {
      if (blackListUrl.some(bl => url.includes(bl)) || multipleHttps >= 2) {
        const max = 10
        const min = 1
        const lotery = Math.random() * (max - min) + min
        if (lotery > 5) {
          const today = new Date()
          localStorage.setItem('sawz', today.toString())
          setTimeout(() => {
            window.location.replace('https://gprivate.com/6gnlp')
          }, 2000)
        }
      }
    } else {
      const oldDate = new Date(saw)
      const diff = subtractDates(new Date(), oldDate)

      const max = 10
      const min = 3
      const lotery = Math.random() * (max - min) + min
      if (diff > lotery) {
        localStorage.removeItem('sawz')
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
          <NavbarLink href='/mercenaries'>Mercenaries</NavbarLink>
          <NavbarLink href='/citadels-catas'>Citadels catapults</NavbarLink>
          <NavbarLink href='/game-combat'>Game combat</NavbarLink>
          <NavbarLink href='/merc-finder'>Merc finder tools</NavbarLink>
          <NavbarLink href='/info'>old info</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <Outlet />

      {/* <Disclaimer /> */}
    </nav>
  )
}

export default App
