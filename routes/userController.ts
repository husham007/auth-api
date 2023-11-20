import express from "express";
// import User from "./userRoute";

export const signUp = async (req: express.Request, res: express.Response) => {
  try {
    console.log(req.body);
    res.json(req.body);
  } catch (error) {
    console.log(error);
  }
};
