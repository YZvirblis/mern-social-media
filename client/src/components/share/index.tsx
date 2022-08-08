import React, { useState } from "react";
import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import * as PostController from "../../api/post.api.controller";
import IPost from "../../interfaces/post.interface";
import * as cloudinaryController from "../../api/cloudinary.api.controller";
import TextareaAutosize from "react-textarea-autosize";

function Share({ updatePosts }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [postText, setPostText] = useState<string>("");
  const [image, setImage] = useState(undefined);

  //@ts-ignore
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  const sharePost = async (e: any) => {
    setIsLoading(true);
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
    setIsLoading(false);
    setImage(undefined);
    setPostText("");
    updatePosts();
  };

  return (
    <div className="share">
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="shareProfilePicture"
            />
            <TextareaAutosize
              placeholder="Whats on your mind?"
              className="shareInput"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          {image && (
            <div className="previewImage" style={{ position: "relative" }}>
              <Cancel
                htmlColor="tomato"
                className="shareIcon"
                onClick={() => setImage(undefined)}
                style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  cursor: "pointer",
                }}
              ></Cancel>
              <img src={URL.createObjectURL(image)} className="postImg" />
            </div>
          )}
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
              {/* <div className="shareOption">
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
              </div> */}
            </div>
            <button className="shareButton" onClick={(e) => sharePost(e)}>
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Share;
