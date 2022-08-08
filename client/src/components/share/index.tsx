import React, { useState } from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import * as PostController from "../../api/post.api.controller";
import IPost from "../../interfaces/post.interface";
import * as cloudinaryController from "../../api/cloudinary.api.controller";

function Share({ updatePosts }: any) {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(undefined);

  //@ts-ignore
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  const sharePost = async (e: any) => {
    e.preventDefault();
    const now = new Date();
    const postImage = image
      ? await cloudinaryController.upload(image)
      : undefined;
    const post: IPost = {
      userID: currentUser._id,
      createdAt: now,
      img: postImage,
      desc: postText,
      likes: [],
    };
    await PostController.createPost(post);
    updatePosts();
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="shareProfilePicture"
          />
          <input
            placeholder="Whats on your mind?"
            className="shareInput"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div
              className="shareOption"
              onClick={
                //@ts-ignore
                () => document.getElementById("selectFileInput").click()
              }
            >
              <PermMedia htmlColor="tomato" className="shareIcon"></PermMedia>
              <span className="shareOptionText">Photo or Video</span>
              <input
                id="selectFileInput"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                multiple={false}
                onChange={
                  //@ts-ignore
                  (e) => setImage(e.target.files[0])
                }
                style={{ display: "none" }}
              />
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon"></Label>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon"></Room>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareIcon"
              ></EmojiEmotions>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={(e) => sharePost(e)}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
