import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Customer Pages
import Home from './Pages/Home';
import AllRooms from './Pages/Allrooms';
import RoomDetails from './Pages/RoomDetails';
import MyBookings from './Pages/MyBookings';
import Layout from './Pages/hotelOwner/Layout';
import Dashboard from './Pages/hotelOwner/DashBoard';
import ListRoom from './Pages/hotelOwner/ListRoom';
import AddRoom from './Pages/hotelOwner/AddRoom';
import { useAppContext } from './conext/AppContext';



// Owner Layout & Pages

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith('/owner');
  const {showHotelReg}=useAppContext();
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg/>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom/>} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
