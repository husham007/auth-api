"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const userController_1 = require("../controllers/userController");
const verifyToken_1 = require("../middlewares/verifyToken");
userRouter.post("/signup", userController_1.signUp);
userRouter.post("/signin", userController_1.login);
userRouter.post("/logout", verifyToken_1.verifyToken, userController_1.logout);
userRouter.get("/profile", verifyToken_1.verifyToken, userController_1.getProfile);
exports.default = userRouter;
