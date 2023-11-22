import express from "express";
const userRouter = express.Router();
import {
  signUp,
  login,
  logout,
  getProfile,
} from "../controllers/userController";
import { verifyToken } from "../middlewares/verifyToken";

userRouter.post("/signup", signUp);
userRouter.post("/signin", login);
userRouter.post("/logout", verifyToken, logout);
userRouter.get("/profile", verifyToken, getProfile);

export default userRouter;
