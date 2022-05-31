import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post(props: any) {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setIsLiked] = useState(false);
  const user = Users.filter((u) => u.id === props.post.userId)[0];
  console.log(user);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={`/assets/${user.profilePicture}`}
              alt="profile"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{props.post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.post.desc}</span>
          <img src={`assets/${props.post.photo}`} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              alt="like"
              onClick={handleLike}
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              alt="heart"
              onClick={handleLike}
            />
            <span className="postLikeCounter">{like} people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {props.post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
