import React from "react";
import Feed from "../../components/feed";
import RightBar from "../../components/rightbar";
import SideBar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import "./profilePage.css";

function ProfilePage() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}post/3.jpeg`}
                alt="cover"
                className="profileCoverImg"
              />
              <img
                src={`${PF}person/1.jpeg`}
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
            <Feed isProfile={true} />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
