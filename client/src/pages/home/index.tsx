import React from "react";
import "./home.css";
import Topbar from "../../components/topbar";
import SideBar from "../../components/sidebar";
import Feed from "../../components/feed";
import RightBar from "../../components/rightbar";

function HomePage() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default HomePage;
