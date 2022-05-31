import { userInfo } from "os";
import React from "react";
import "./friend.css";

function Friend(props: any) {
  return (
    <li className="sidebarFriend">
      <img
        src={`/assets/${props.user.profilePicture}`}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{props.user.username}</span>
    </li>
  );
}

export default Friend;
