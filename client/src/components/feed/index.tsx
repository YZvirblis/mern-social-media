import React, { useEffect, useState } from "react";
import Post from "../post";
import Share from "../share";
import "./feed.css";
import * as postAPI from "../../api/post.api.controller";
import IPost from "../../interfaces/post.interface";

interface props {
  isProfile?: boolean;
}

function Feed({ isProfile }: props): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  //@ts-ignore
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const profileUserID = window.location.pathname.split("/")[2];

  const fetchTimeline = async () => {
    setIsLoading(true);
    const res = isProfile
      ? await postAPI.getUserPosts(profileUserID)
      : await postAPI.getFeed(currentUser._id);
    setPosts(res);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTimeline();
  }, [isProfile]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share updatePosts={fetchTimeline} />
        {isLoading && <span>LOADING . . .</span>}
        {posts
          .sort((a, b) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          })
          .map((p: IPost) => {
            return (
              <Post
                currentUserID={currentUser._id}
                updatePosts={fetchTimeline}
                key={p._id}
                post={p}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Feed;
