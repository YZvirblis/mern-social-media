import { Request, Response, Router, NextFunction, request } from "express";
import { getUserHandler, registerUserHandler } from "../handlers/user.handler";

const UserController = () => {
  const router = Router();
  router.get("/", getUser);
  router.post("/register", registerUser);
  return router;
};

const getUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res = await getUserHandler();
  console.log("RES FROM CONTROLLER: ", res);
  response.send(res);
};

const registerUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { username, email, password } = request.body;
  const res = await registerUserHandler(username, email, password);
  console.log("RES: ", res);
};

export { UserController };
