import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='text-white bg-[#4f46e5]'>
        
        <div className='flex justify-center'>
            <div className='max-w-275 w-full p-4 flex items-center justify-between'>
                <Link to="/" className=''>Home Page </Link>
                <Link to="/about" className=''>About Page </Link>
                <Link to="/add" className=''>Add Music </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar