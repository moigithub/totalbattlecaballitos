import { Outlet, NavLink } from 'react-router-dom'

import './App.css'
import { Disclaimer } from './disclaimer'
import { useEffect } from 'react'
import { decodeHash } from './hashStore'
import { useStackStore } from './stackStore'
import { ARMY } from './soldiers'
import { Stack, Unit } from './types'

function App() {
  const setArmy = useStackStore(state => state.setArmy)
  const setLeadership = useStackStore(state => state.setLeadership)
  const setAuthority = useStackStore(state => state.setAuthority)
  const setDominance = useStackStore(state => state.setDominance)

  useEffect(() => {
    const locaHash = location.hash
    if (locaHash === '') {
      //check if we have anything on localstorage
      const storedValue = localStorage.getItem('tbcalc')
      if (storedValue) {
        //replace the current hash with the stored value
        //location.hash = storedValue
        const searchParams = new URLSearchParams(storedValue)
        const value = searchParams.get('stacks')

        // Helper function to decode the hash
        const data = decodeHash(String(value))
        const parsed = JSON.parse(data)
        // console.log('parsed', parsed)
        setArmy(
          (parsed.state.army as Stack[]).map(stack => {
            const unit = ARMY[stack.unitKey as string] as Unit
            return {
              ...stack,
              unit
            }
          })
        )
        setLeadership(parsed.state.leadership)
        setAuthority(parsed.state.authority)
        setDominance(parsed.state.dominance)
      }
    }
  }, [])

  return (
    <>
      <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          Troops calculation - totalbattle
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  to={`/calc`}
                  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Stack Calc
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/info`}
                  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Info
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/mercenaries`}
                  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Mercenaries
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/citadels-catas`}
                  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Citadels catapults
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/game-combat`}
                  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Game combat
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <Disclaimer />
    </>
  )
}

export default App
