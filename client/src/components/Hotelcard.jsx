
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hotelcard = ({ room, index }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md transition hover:shadow-lg overflow-hidden">
      <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} className="block">
        <div className="relative">
          <img
            src={room.images[0]}
            alt=""
            className="w-full h-48 object-cover"
          />
          {index % 2 === 0 && (
            <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
              Best Seller
            </p>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="font-playfair text-xl font-medium text-gray-800">
              {room.hotel.name}
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <img src={assets.starIconFilled} alt="star" className="w-4" /> 4.5
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm mb-4 text-gray-600">
            <img src={assets.locationIcon} alt="location-icon" className="w-4" />
            <span>{room.hotel.address}</span>
          </div>

          <div className="flex items-center justify-between">
            <p>
              <span className="text-xl text-gray-800 font-semibold">
                Rs.{room.pricePerNight}
              </span>{' '}
              /night
            </p>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hotelcard;

