import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { registerHotel } from "../controler/hotelConroller.js";
const hotelRouter=express.Router();

hotelRouter.post('/',protect,registerHotel)

 export default hotelRouter