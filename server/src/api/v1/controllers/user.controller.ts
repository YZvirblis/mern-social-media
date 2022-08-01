import { Request, Response, Router, NextFunction, request } from "express";
import {
  getUserHandler,
  registerUserHandler,
  loginUserHandler,
  updateUserHandler,
  deleteUserHandler,
  followUserHandler,
  unfollowUserHandler,
} from "../handlers/user.handler";

const UserController = () => {
  const router = Router();
  router.get("/:id", getUser);
  router.post("/register", registerUser);
  router.post("/login", loginUser);
  router.put("/update/:id", updateUser);
  router.delete("/delete/:id", deleteUser);
  router.put("/follow/:id", followUser);
  router.put("/unfollow/:id", unfollowUser);

  return router;
};

// GET USER BY ID
const getUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userID = request.params.id;
  const username = request.query.username;
  const res: any = await getUserHandler(userID, username);
  response.status(res.status).json(res.message);
};

// REGISTRATION CONTROLLER
const registerUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { username, email, password } = request.body;
  const res: any = await registerUserHandler(username, email, password);
  console.log(res.message);
  response.status(res.status).send(res.message);
};

// LOGIN CONTROLLER
const loginUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email, password } = request.body;
  const res: any = await loginUserHandler(email, password);

  response.status(res.status).json(res.message);
};

// UPDATE CONTROLLER
const updateUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramID = request.params.id;
  const user = request.body;
  const res: any = await updateUserHandler(paramID, user);
  response.status(res.status).json(res.message);
};

// DELETE CONTROLLER
const deleteUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res: any = await deleteUserHandler(request.params.id, request.body);
  response.status(res.status).json(res.message);
};

// FOLLOW CONTROLLER
const followUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramID = request.params.id;
  const userID = request.body.id;
  const res: any = await followUserHandler(paramID, userID);
  response.status(res.status).json(res.message);
};

// UNFOLLOW CONTROLLER
const unfollowUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramID = request.params.id;
  const userID = request.body.id;
  const res: any = await unfollowUserHandler(paramID, userID);
  response.status(res.status).json(res.message);
};

export { UserController };
