import React from "react";
import heroImage from "../assets/backimage.jpg";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center max-w-7xl">
        <p className="bg-[#4989FF]/50 px-3.5 py-1 rounded-full mt-20">
          The ultimate Hotel Experience
        </p>
        <h1 className="text-2xl md:text-5xl md:leading-[56px] font-bold mt-4 max-w-xl">
          Discover Your Perfect Gateway Destination
        </h1>
        <p className="text-sm md:text-base text-gray-200 max-w-xl mt-2">
          Let go of the rush, hold on to comfort. Find peace in every pillow and place.
        </p>

        {/* Updated Form */}
        <form className='bg-white text-gray-700 rounded-xl px-8 py-6 mt-10 w-full max-w-5xl flex flex-wrap md:flex-nowrap items-end gap-4 md:gap-6 shadow-lg'>

          {/* Destination */}
          <div className='flex-1 min-w-[140px]'>
            <label className='block text-sm font-medium mb-1 flex items-center gap-2' htmlFor="destinationInput">
              <img src={assets.calenderIcon} alt="" className='h-4' />
              Destination
            </label>
            <input
              list='destinations'
              id="destinationInput"
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type here"
              required
            />
            <datalist id='destinations'>
              {cities.map((city, index) => (<option value={city} key={index} />))}
            </datalist>
          </div>

          {/* Check in */}
          <div className='flex-1 min-w-[140px]'>
            <label className='block text-sm font-medium mb-1 flex items-center gap-2' htmlFor="checkIn">
              <img src={assets.calenderIcon} alt="" className='h-4' />
              Check in
            </label>
            <input
              id="checkIn"
              type="date"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Check out */}
          <div className='flex-1 min-w-[140px]'>
            <label className='block text-sm font-medium mb-1 flex items-center gap-2' htmlFor="checkOut">
              <img src={assets.calenderIcon} alt="" className='h-4' />
              Check out
            </label>
            <input
              id="checkOut"
              type="date"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Guests */}
          <div className='flex-1 min-w-[100px]'>
            <label className='block text-sm font-medium mb-1' htmlFor="guests">Guests</label>
            <input
              id="guests"
              type="number"
              min={1}
              max={4}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className='bg-black text-white rounded-md px-5 py-2.5 text-sm font-medium hover:bg-gray-900 transition-all max-md:w-full flex items-center gap-2'
          >
            <img src={assets.searchIcon} alt="search" className='h-5' />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
