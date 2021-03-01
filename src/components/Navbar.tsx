import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 bg-blue-600 text-gray-100 shadow-md'>
      <Link to='/' className='pl-8'>
        <h1>React-Tailwind-TypeScript-Webpack</h1>
      </Link>
      <div className='pr-8 hidden md:flex gap-2 items-center'>
        <Link to='/'>
          <span>Home</span>
        </Link>
        <Link to='/about'>
          <span>About</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
