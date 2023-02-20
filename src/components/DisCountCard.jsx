import React from 'react'
import paperBag from '.././assets/Paperbag.png'

const DisCountCard = () => {
  return (
    <div className="min-w-[370px] bg-blue-300 flex justify-between p-6 rounded-lg md:min-w-[80%]">
      <div className="flex flex-col gap-y-3">
        <p className="text-white font-semibold">Get all products at a</p>
        <p className="text-gray-800">whooping 50% off</p>
        <button className="px-3 py-2 rounded-lg bg-white">Shop now</button>
      </div>
      <img src={paperBag} alt="Shopping paper bag" />
    </div>
  );
}

export default DisCountCard