import express from "express";
import { protect } from "../middlewares/authMiddleware";
import { registerHotel } from "../controler/hotelConroller";
const hotelRouter=express.Router();

hotelRouter.post('/',protect,registerHotel)

 export default hotelRouter