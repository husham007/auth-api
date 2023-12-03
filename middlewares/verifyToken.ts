import jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";
// import { UserInterface2 } from "../types";

export const verifyToken = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const JWT_SECRET = process.env.SECRET || "";
    const token = req.cookies.access_token;

    if (token) {
      const payload = jwt.verify(token, JWT_SECRET);

      (req as any).user = payload;
      next();
    } else {
      res.status(403).json({ error: "Forbidden unauthroized !!!" });
    }
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";

    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).json({ error: errorMessage });
  }
};
