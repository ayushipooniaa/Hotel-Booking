import React from "react";
import { roomsDummyData } from "../assets/assets";
import Hotelcard from "./Hotelcard";
import Title from "./Titel";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate(); // Moved outside return

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
      />

      <div
        className="flex overflow-x-auto space-x-6 mt-20"
        style={{ scrollbarWidth: "thin" }}
      >
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <Hotelcard key={room._id || index} room={room} index={index} />
        ))}
      </div>

      <button
  onClick={() => {
    navigate('/rooms');
    scrollTo(0, 0);
  }}
  className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-black text-white hover:bg-gray-800 transition-all cursor-pointer"
>
  View All Destinations
</button>
    </div>
  );
};

export default Featured;
