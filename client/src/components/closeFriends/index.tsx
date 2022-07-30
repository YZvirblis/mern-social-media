import { userInfo } from "os";
import React from "react";
import "./friend.css";

function Friend(props: any) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        src={`${PF}${props.user.profilePicture}`}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{props.user.username}</span>
    </li>
  );
}

export default Friend;
