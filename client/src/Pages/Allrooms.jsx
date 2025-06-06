import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/Starrating";
import { assets } from "../assets/assets";
import { roomsDummyData } from "../assets/assets";
import { facilityIcons } from "../assets/assets";
//import Footer from "../components/Footer";


const AllRooms = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  const FilterContent = () => (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button
          className="text-sm text-blue-500"
          onClick={() => setShowFilters(false)}
        >
          CLEAR
        </button>
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Popular filters</p>
        {["Single Bed", "Double Bed", "Luxury Room", "Family Suite"].map((filter) => (
          <div key={filter} className="flex items-center gap-2 mb-2">
            <input type="checkbox" id={filter} />
            <label htmlFor={filter}>{filter}</label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Price Range</p>
        {["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"].map((range) => (
          <div key={range} className="flex items-center gap-2 mb-2">
            <input type="checkbox" id={range} />
            <label htmlFor={range}>₹{range}</label>
          </div>
        ))}
      </div>

      <div>
        <p className="font-medium mb-2">Sort By</p>
        {["Price Low to High", "Price High to Low", "Newest First"].map((sort) => (
          <div key={sort} className="flex items-center gap-2 mb-2">
            <input type="radio" name="sort" id={sort} />
            <label htmlFor={sort}>{sort}</label>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="pt-28 pb-28 px-4 md:px-16 lg:px-24 xl:px-32 bg-white">
      <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl mb-6">
        Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
      </p>

      {/* FILTER button for mobile */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="border px-4 py-2 rounded-md text-sm font-medium"
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Section for Mobile */}
        {showFilters && (
          <div className="block lg:hidden border rounded-xl p-4">
            <FilterContent />
          </div>
        )}

        {/* Rooms List */}
        <div className="flex-1 flex flex-col gap-10">
          {roomsDummyData.map((room) => (
            <div key={room._id} className="flex flex-col md:flex-row gap-6 border-b pb-6">
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel"
                title="View room details"
                className="w-full md:w-[300px] h-[200px] rounded-xl object-cover cursor-pointer"
              />

              <div className="flex flex-col justify-between gap-3 w-full">
                <div>
                  <p className="text-gray-500">{room.hotel.city}</p>
                  <h2
                    className="text-gray-800 text-2xl font-playfair cursor-pointer"
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {room.hotel.name}
                  </h2>

                  <div className="flex items-center mt-1">
                    <StarRating rating={room.rating} />
                    <p className="ml-2 text-sm text-gray-600">{room.reviewsCount}+ reviews</p>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                    <img src={assets.locationIcon} alt="location" />
                    <span>{room.hotel.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3 text-sm">
                    {(room.amenities || []).map((amenity, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-medium"
                      >
                        {facilityIcons[amenity] && (
                          <img src={facilityIcons[amenity]} alt={amenity} className="w-4 h-4" />
                        )}
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-lg font-semibold mt-2">
                  ₹{room.pricePerNight} <span className="text-gray-500 text-sm">/night</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters Sidebar for Desktop */}
        <div className="hidden lg:block w-full max-w-[300px]">
          <div className="sticky top-32 border rounded-xl p-4 shadow-md bg-white">
            <FilterContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
