import { Request, Response, Router, NextFunction, request } from "express";
import { getPostHandler } from "../handlers/post.handler";

const PostController = () => {
  const router = Router();
  router.get("/:id", getPost);
  return router;
};

// GET POST BY ID
const getPost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res: any = await getPostHandler();
  response.status(res.status).json(res.message);
};

export { PostController };
