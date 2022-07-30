import axios from "axios";

const getFeed = async () => {
  const res = await axios.get("/post/feed/628ba4703436e45ac15f60d2");
  return res.data;
};
const getUserPosts = async (username: string) => {
  const res = await axios.get(`/post/timeline/${username}`);
  return res.data;
};

export { getFeed, getUserPosts };
