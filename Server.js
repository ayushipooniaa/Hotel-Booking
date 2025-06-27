import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controler/clerkWebhooks.js";
import userRouter from "./Routes/UserRoutes.js";
import hotelRouter from "./Routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./Routes/roomRoutes.js";
import bookingRouter from "./Routes/bookingRoutes.js";
connectDB()
connectCloudinary()
const app = express()
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.use("/api/clerk",clerkWebhooks);
app.get("/", (req, res) => res.send("API is Working  "));
app.use('/api/user',userRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/rooms',roomRouter)
app.use('/api/bookings',bookingRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));