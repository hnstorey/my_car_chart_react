import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';


function Navbar() {
  const [ isVisible, setIsVisible ] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
  }
  
  const clicked = () => {
    setIsVisible(false)
  }

  const { loginWithPopup, isAuthenticated } = useAuth0();

  return (
    <nav className="p-3 flex flex-row flex-wrap justify-between bg-cyan-800 text-gray-300">
      <div className="flex flex-shrink-0">
        <Link to='/' className='no-underline text-xl tracking-tighter hover:text-cyan-200 hover:italic'>MyCarChart</Link>
      </div>
      <div className='block'>
        <button
          onClick = { dropDown }
          className = 'flex flex-row justify-right text-xl tracking-tighter font-roboto hover:text-cyan-200 hover:italic'>
            Menu
          </button>
      </div>
    { isVisible ? (
    <div className='w-full text-right'>
      <button className='block-right text-right'>
        <div>
          <Link to='/' onClick={ clicked } className='mt-4 hover:text-cyan-200 hover:italic'>
            Home
          </Link>
        </div>
      </button>
      <p></p>
      <button className='block-right text-right'>
        <div>
          <Link to='/servicehistory' onClick={ clicked } className='mt-4 hover:text-cyan-200 hover:italic'>
            Service History
          </Link>
        </div>
      </button>
      <p></p>
      {
        !isAuthenticated ?
        <LogInButton />
        :
        <LogOutButton />
      }
    </div>
    ) : (<></>
    )}
    </nav>
  )
}

export default Navbar