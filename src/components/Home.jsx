import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import DisCountCard from './DisCountCard'
import Products from './Products'

const Home = () => {
  return (
    <div className="px-5 py-8 font-[quicksand] w-full">
      <Header />
      <div className="mb-3">
        <h1 className="text-xl font-bold">Hello Lexy</h1>
        <p className="text-gray-700 text-sm">What got your attention today?</p>
      </div>
      <div className="w-full flex gap-x-4 overflow-x-scroll mb-6">
        <DisCountCard />
        <DisCountCard />
        <DisCountCard />
      </div>
      <Products />
    </div>
  );
}

export default Home