"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.logout = exports.login = exports.signUp = void 0;
const userSchema_1 = require("../models/userSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const alreadyUser = yield userSchema_1.User.findOne({ email });
        if (!alreadyUser) {
            const saltRounts = 10;
            const hashedPassword = yield bcrypt_1.default.hash(password, saltRounts);
            const newUser = yield userSchema_1.User.create({
                username: username,
                password: hashedPassword,
                email: email,
            });
            res
                .status(201)
                .json({ username: newUser.username, email: newUser.email });
        }
        else {
            res.status(400).json({ error: "User with this email already exists." });
        }
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).send({ error: errorMessage });
    }
});
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const matchedUser = yield userSchema_1.User.findOne({ email }).select("+password");
        if (matchedUser) {
            const matchedPassword = yield bcrypt_1.default.compare(password, matchedUser.password);
            if (matchedPassword) {
                const payload = {
                    email: matchedUser.email,
                    username: matchedUser.username,
                    id: matchedUser._id,
                };
                const JWT_SECRET = process.env.SECRET || "";
                const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, {
                    expiresIn: "800000s",
                });
                res
                    .cookie("access_token", token, {
                    maxAge: 3600000,
                    // httpOnly: true,
                })
                    .json(payload);
            }
            else {
                res.status(400).json({ error: "Invalid Password" });
            }
        }
        else {
            res.status(400).json({ error: "Invalid Email" });
        }
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).send({ error: errorMessage });
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res
            .cookie("access_token", "", { maxAge: 0 })
            .send("You have been logged out successfully!");
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).send({ error: errorMessage });
    }
});
exports.logout = logout;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const userProfile = yield userSchema_1.User.findById(id);
        res.json(userProfile);
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).send({ error: errorMessage });
    }
});
exports.getProfile = getProfile;
//# sourceMappingURL=userController.js.map