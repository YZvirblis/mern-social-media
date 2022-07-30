import React, { useEffect, useState } from "react";
import Post from "../post";
import Share from "../share";
import "./feed.css";
import * as postAPI from "../../api/post.api.controller";
import IPost from "../../interfaces/post.interface";

interface props {
  username?: string;
}

function Feed({ username }: props): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchTimeline = async () => {
    const res = username
      ? await postAPI.getUserPosts(username)
      : await postAPI.getFeed();
    setPosts(res);
  };

  useEffect(() => {
    fetchTimeline();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p: IPost) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
