import React, {useState} from 'react'
import Header from './Header'
import DisCountCard from './DisCountCard'
import Products from './Products'
import { ToastContainer } from 'react-toastify'
import { useAuth } from '../firebase'

const Home = () => {

   const user = useAuth();
   console.log(user);

  return (
    <div className="px-5 py-8 font-[quicksand] w-full">
      <Header/>
      <div className="mb-3 mt-12 ">
        <h1 className="text-xl font-bold">Hello Lexy</h1>
        <p className="text-gray-700 text-sm">What got your attention today?</p>
      </div>
      <div className="w-full flex gap-x-4 overflow-x-scroll mb-6">
        <DisCountCard />
        <DisCountCard />
        <DisCountCard />
      </div>
      <Products />
      <ToastContainer/>
    </div>
  );
}

export default Home