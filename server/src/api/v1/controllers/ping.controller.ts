import { Request, Response, Router, NextFunction } from "express";
import { sendMePong } from "../handlers/ping.handler";

const PingController = () => {
  const router = Router();
  router.get("/me", pingMe);
  return router;
};

const pingMe = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res = await sendMePong();
  console.log("RES FROM CONTROLLER: ", res);
  response.send(res);
};

export { PingController };
