import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    
  return (
    <div className='absolute mt-8 bg-zinc-800 text-white p-6 text-center flex flex-col gap-y-8 rounded-md w-4/12'>
      <Link to='/cart'>View Cart</Link>
      <p>Nav Menu</p>
      <p>Nav Menu</p>
      <p>Nav Menu</p>
      <p>Nav Menu</p>
      </div>
  )
}

export default Sidebar