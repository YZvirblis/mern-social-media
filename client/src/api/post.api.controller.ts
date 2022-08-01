import axios from "axios";
import IPost from "../interfaces/post.interface";

const getFeed = async (id: string) => {
  const res = await axios.get(`/post/feed/${id}`);
  return res.data;
};
const getUserPosts = async (id: string) => {
  const res = await axios.get(`/post/timeline/${id}`);
  return res.data;
};
const createPost = async (post: IPost) => {
  try {
    await axios.post("/post/create", post);
  } catch (err) {
    console.log(err);
  }
};

export { getFeed, getUserPosts, createPost };
