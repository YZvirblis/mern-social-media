import React, { useEffect } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import * as userAPI from "../../api/user.api.controller";
import IUser from "../../interfaces/user.interface";
import IPost from "../../interfaces/post.interface";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

interface props {
  post: IPost;
}

function Post({ post }: props): JSX.Element {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "memore",
    },
  });
  const myImage = cld.image(post.img);

  const fetchPostUser = async (userID: string) => {
    const res = await userAPI.getUser(userID);
    setUser(res);
  };

  useEffect(() => {
    fetchPostUser(post.userID);
  }, [post.userID]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = () => {
    //@ts-ignore
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <>
      {user && post && (
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to={`profile/${user.username}`}>
                  <img
                    className="postProfileImg"
                    src={user.profilePicture || PF + "person/noAvatar.png"}
                    alt=""
                  />
                </Link>
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{format(post.createdAt)}</span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.desc}</span>
              {post.img ? (
                <AdvancedImage cldImg={myImage} className="postImg" />
              ) : // <img src={post.img} alt="" className="postImg" />
              null}
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={`${PF}like.png`}
                  alt="like"
                  onClick={handleLike}
                />
                <img
                  className="likeIcon"
                  src={`${PF}heart.png`}
                  alt="heart"
                  onClick={handleLike}
                />
                <span className="postLikeCounter">{like} people like this</span>
              </div>
              <div className="postBottomRight">
                {/* <span className="postCommentText">
                  {post.comment} comments
                </span> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Post;
