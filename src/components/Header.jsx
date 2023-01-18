import React from 'react'
import hamburger from '../assets/hamburger.svg'
import search from '../assets/search.svg'

const Header = () => {
  return (
    <header className='flex justify-between pb-8'>
      <img src={hamburger} alt="hamburger menu" />
      <img src={search} alt="search icon" />
    </header>
  );
}

export default Header