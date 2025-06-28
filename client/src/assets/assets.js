import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import offer1 from "./offer1.jpg"
import offer2 from "./offer2.jpg"
import offer3 from "./offer3.jpg"
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

// Pools
import pool1 from './pool1.jpg';
import pool2 from './pool5.jpg';
import pool3 from './pool3.jpg';
import pool4 from './pool4.jpg';

// Restaurants
import res1 from './res1.jpg';
import res2 from './res2.jpg';
import res3 from './res3.jpg';
import res4 from './res4.jpg';

// Game Zones
import game1 from './game1.jpg';
import game2 from './game2.jpg';
import game3 from './game3.jpg';
import game4 from './game4.jpg';

export const poolImages = [pool1, pool2, pool3, pool4];
export const restaurantImages = [res1, res2, res3, res4];
export const gameZoneImages = [game1, game2, game3, game4];

export const assets = {
  logo,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
};

export const cities = [
  "Dubai",
  "Singapore",
  "New York",
  "London",
];

export const exclusiveOffers = [
  { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: offer1 },
  { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: offer2 },
  { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: offer3 },
];

export const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    address: "Delhi, India",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review: "StayIn truly understands customer needs. Loved the personalized suggestions!"
  },
  {
    id: 2,
    name: "Ravi Kulkarni",
    address: "Bengaluru, India",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review: "Best platform for quick and quality hotel bookings. Would use again!"
  },
  {
    id: 3,
    name: "Priya Nair",
    address: "Pune, India",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review: "Affordable luxury. Booked a hotel in seconds. Highly recommend!"
  }
];

export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

export const roomCommonData = [
  { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
  { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
  { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
  { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
  "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  "username": "Rakesh Sharma",
  "email": "rakesh.sharma@example.com",
  "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  "role": "hotelOwner",
  "createdAt": "2025-03-25T09:29:16.367Z",
  "updatedAt": "2025-04-10T06:34:48.719Z",
  "__v": 1,
  "recentSearchedCities": ["Mumbai"]
};

// Hotel Dummy Data
export const hotelDummyData = [
  {
    "_id": "hotel_001",
    "name": "Hotel Taj Heights",
    "address": "Plot No. 21, Connaught Place, New Delhi",
    "contact": "+91 9812345678",
    "owner": userDummyData,
    "city": "New Delhi",
  },
  {
    "_id": "hotel_002",
    "name": "The Marine Bay Resort",
    "address": "Plot No. 12, Marine Drive, Mumbai, Maharashtra",
    "contact": "+91 9823456789",
    "owner": userDummyData,
    "city": "Mumbai",
  },
  {
    "_id": "hotel_003",
    "name": "Royal Orchid Inn",
    "address": "Plot No. 34, MG Road, Bengaluru, Karnataka",
    "contact": "+91 9876543210",
    "owner": userDummyData,
    "city": "Bengaluru",
  },
  {
    "_id": "hotel_004",
    "name": "Lakeview Palace",
    "address": "Lake Pichola, Udaipur, Rajasthan",
    "contact": "+91 9898989898",
    "owner": userDummyData,
    "city": "Udaipur",
  }
];

// Rooms Dummy Data
export const roomsDummyData = [
  {
    "_id": "room_001",
    "hotel": hotelDummyData[0],
    "roomType": "Executive Suite",
    "pricePerNight": 54999,
    "amenities": ["Free WiFi", "Room Service", "Pool Access"],
    "images": [roomImg1, pool1, res1, game1],
    "isAvailable": true,
  },
  {
    "_id": "room_002",
    "hotel": hotelDummyData[1],
    "roomType": "Presidential Suite",
    "pricePerNight": 89999,
    "amenities": ["Free Breakfast", "Mountain View", "Free WiFi"],
    "images": [roomImg2, pool2, res2, game2],
    "isAvailable": true,
  },
  {
    "_id": "room_003",
    "hotel": hotelDummyData[2],
    "roomType": "Royal Suite",
    "pricePerNight": 65999,
    "amenities": ["Room Service", "Free Breakfast", "Mountain View"],
    "images": [roomImg3, pool3, res3, game3],
    "isAvailable": true,
  },
  {
    "_id": "room_004",
    "hotel": hotelDummyData[3],
    "roomType": "Classic Room",
    "pricePerNight": 49999,
    "amenities": ["Pool Access", "Free WiFi", "Room Service"],
    "images": [roomImg4, pool4, res4, game4],
    "isAvailable": true,
  }
];

// Bookings Data (Original complex structure)
export const userBookingsDummy = [
  {
    "_id": "67f76839994a731e97d3b8ce",
    "user": userDummyData,
    "room": roomsDummyData[1],
    "hotel": hotelDummyData[1],
    "checkInDate": "2025-04-30T00:00:00.000Z",
    "checkOutDate": "2025-05-01T00:00:00.000Z",
    "totalPrice": 299,
    "guests": 1,
    "status": "pending",
    "paymentMethod": "Stripe",
    "isPaid": true,
    "createdAt": "2025-04-10T06:42:01.529Z",
    "updatedAt": "2025-04-10T06:43:54.520Z",
    "__v": 0
  },
  {
    "_id": "67f76829994a731e97d3b8c3",
    "user": userDummyData,
    "room": roomsDummyData[0],
    "hotel": hotelDummyData[0],
    "checkInDate": "2025-04-27T00:00:00.000Z",
    "checkOutDate": "2025-04-28T00:00:00.000Z",
    "totalPrice": 399,
    "guests": 1,
    "status": "pending",
    "paymentMethod": "Pay At Hotel",
    "isPaid": false,
    "createdAt": "2025-04-10T06:41:45.873Z",
    "updatedAt": "2025-04-10T06:41:45.873Z",
    "__v": 0
  },
  {
    "_id": "67f76810994a731e97d3b8b4",
    "user": userDummyData,
    "room": roomsDummyData[3],
    "hotel": hotelDummyData[3],
    "checkInDate": "2025-04-11T00:00:00.000Z",
    "checkOutDate": "2025-04-12T00:00:00.000Z",
    "totalPrice": 199,
    "guests": 1,
    "status": "pending",
    "paymentMethod": "Pay At Hotel",
    "isPaid": false,
    "createdAt": "2025-04-10T06:41:20.501Z",
    "updatedAt": "2025-04-10T06:41:20.501Z",
    "__v": 0
  }
];

// Simple Bookings Data for Testing (This is what you were using)
export const userBookingsDummyData = [
  {
    _id: "b1",
    hotel: {
      name: "Hotel Paradise",
      address: "123 Ocean Drive, Miami",
    },
    room: {
      roomType: "Deluxe Suite",
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"],
    },
    guests: 2,
    checkInDate: "2025-06-08",
    checkOutDate: "2025-06-10",
    totalPrice: 25000,
    isPaid: false,
  },
  {
    _id: "b2",
    hotel: {
      name: "The Grand Palace",
      address: "456 Hilltop Lane, Shimla",
    },
    room: {
      roomType: "Luxury King",
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"],
    },
    guests: 3,
    checkInDate: "2025-07-01",
    checkOutDate: "2025-07-05", 
    totalPrice: 60000,
    isPaid: true,
  },
  {
    _id: "b3",
    hotel: {
      name: "Sunset Resort",
      address: "789 Beach Road, Goa",
    },
    room: {
      roomType: "Ocean View Suite",
      images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop"],
    },
    guests: 4,
    checkInDate: "2025-08-15",
    checkOutDate: "2025-08-20",
    totalPrice: 8500,
    isPaid: true,
  }
];
export const dashboardDummyData = {
  totalBookings: 320,
  totalRevenue: 150000,
  bookings: [
    {
      user: { username: "Amit Verma" },
      room: { roomType: "Executive Suite" },
      totalPrice: 5000,
      isPaid: true,
    },
    {
      user: { username: "Riya Sharma" },
      room: { roomType: "Presidential Suite" },
      totalPrice: 12000,
      isPaid: true,
    },
    {
      user: { username: "Siddharth Mehra" },
      room: { roomType: "Classic Room" },
      totalPrice: 3000,
      isPaid: false,
    },
  ]
};
