import React from 'react'
import paperBag from '.././assets/Paperbag.png'

const DisCountCard = () => {
  return (
    <div className="min-w-[337px] bg-blue-300 flex justify-between  p-6 rounded-md md:min-w-[80%]">
      <div className="flex flex-col gap-y-3">
        <p className="text-white text-[20px]">Get all products at a</p>
        <p className="text-gray-800">whooping 50% off</p>
        <button className="px-[21px] py-[7px] w-fit shadow-md text-sm text-[#303030] rounded-lg bg-white">
          Shop now
        </button>
      </div>
      <img src={paperBag} alt="Shopping paper bag" />
    </div>
  );
}

export default DisCountCard