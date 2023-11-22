import express, { Request } from "express";
import jwt from "jsonwebtoken";

export interface UserInterface {
  username: string;
  email: string;
  password: string;
}

export interface CustomRequest extends Request {
  user: string | jwt.JwtPayload;
}
