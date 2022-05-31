import React from "react";
import Feed from "../../components/feed";
import RightBar from "../../components/rightbar";
import SideBar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import "./profilePage.css";

function ProfilePage() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt="cover"
                className="profileCoverImg"
              />
              <img
                src="assets/person/1.jpeg"
                alt="person"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h1 className="profileInfoName">My Name</h1>
              <span className="profileInfoDesc">
                sdgdsfherg fvhertudfvhdfh vbedryhdfjhdgjdf
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
