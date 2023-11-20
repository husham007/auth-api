import express from "express";
const userRouter = express.Router();
import { signUp } from "./userController";

userRouter.post("/signup", signUp);

export default userRouter;
