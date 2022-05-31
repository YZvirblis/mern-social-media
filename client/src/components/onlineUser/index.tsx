import React from "react";
import "./onlineUser.css";

function OnlineUser(props: any) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={`assets/${props.user.profilePicture}`}
          alt="person"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{props.user.username}</span>
    </li>
  );
}

export default OnlineUser;
