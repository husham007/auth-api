import express from "express";
const userRouter = express.Router();
import { signUp, login, logout } from "../controllers/userController";

import { verifyToken } from "../middlewares/verifyToken";

userRouter.post("/signup", signUp);
userRouter.post("/signin", login);
userRouter.post("/logout", verifyToken, logout);

export default userRouter;
