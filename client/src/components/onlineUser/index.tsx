import React from "react";
import "./onlineUser.css";

function OnlineUser(props: any) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={`${PF}${props.user.profilePicture}`}
          alt="person"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{props.user.username}</span>
    </li>
  );
}

export default OnlineUser;
