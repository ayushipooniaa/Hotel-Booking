import { Express } from "express";
import { protect } from "../middlewares/authMiddleware";
import { getUserData, storeRecentSearchedCities } from "../controler/UserController";
const userRouter=express.Router();
userRouter.get('/',protect ,getUserData);
userRouter.post('/store-recent-search',protect ,storeRecentSearchedCities);


export default userRouter;