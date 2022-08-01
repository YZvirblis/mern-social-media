import { Request, Response, Router, NextFunction, request } from "express";
import {
  createPostHandler,
  updatePostHandler,
  deletePostHandler,
  likePostHandler,
  getPostHandler,
  getPostsHandler,
  getUserPostsHandler,
} from "../handlers/post.handler";

const PostController = () => {
  const router = Router();
  router.post("/create/", createPost);
  router.put("/update/:id", updatePost);
  router.delete("/delete/:id", deletePost);
  router.put("/like/:id", likePost);
  router.get("/single/:id", getPost);
  router.get("/feed/:id", getPosts);
  router.get("/timeline/:id", getUserPosts);
  return router;
};

// CREATE POST
const createPost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const post = request.body;
  const res: any = await createPostHandler(post);
  response.status(res.status).json(res.message);
};

// UPDATE POST
const updatePost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postUpdate = request.body;
  const postID = request.params.id;
  const res: any = await updatePostHandler(postID, postUpdate);
  response.status(res.status).json(res.message);
};

// DELETE POST
const deletePost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postID = request.params.id;
  const userID = request.body.userID;
  const res: any = await deletePostHandler(postID, userID);
  response.status(res.status).json(res.message);
};

// LIKE / DISLIKE POST
const likePost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postID = request.params.id;
  const userID = request.body.userID;
  const res: any = await likePostHandler(postID, userID);
  response.status(res.status).json(res.message);
};

// GET POST
const getPost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postID = request.params.id;
  const res: any = await getPostHandler(postID);
  // console.log(res);
  response.status(res.status).json(res.message);
};

// GET ALL TIMELINE POSTS
const getPosts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userID = request.params.id;
  const res: any = await getPostsHandler(userID);
  response.status(res.status).json(res.message);
};

// GET ALL USER TIMELINE POSTS
const getUserPosts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id = request.params.id;
  const res: any = await getUserPostsHandler(id);
  response.status(res.status).json(res.message);
};

export { PostController };
