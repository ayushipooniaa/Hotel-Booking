import express from "express";
import { protect } from "../middlewares/authMiddleware.js"
import { getUserData, storeRecentSearchedCities } from "../controler/UserController.js";
const userRouter=express.Router();
userRouter.get('/',protect ,getUserData);
userRouter.post('/store-recent-search',protect ,storeRecentSearchedCities);


export default userRouter;