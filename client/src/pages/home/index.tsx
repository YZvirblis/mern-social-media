import React, { useEffect } from "react";
import "./home.css";
import Topbar from "../../components/topbar";
import SideBar from "../../components/sidebar";
import Feed from "../../components/feed";
import RightBar from "../../components/rightbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import IUser from "../../interfaces/user.interface";

interface props {
  user?: null | IUser;
}

function HomePage() {
  //@ts-ignore
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  if (currentUser) {
    return (
      <>
        <Topbar />
        <div className="homeContainer">
          {/* <SideBar /> */}
          <Feed />
          {/* <RightBar /> */}
        </div>
      </>
    );
  } else {
    return <Navigate to="login" replace />;
  }
}

export default HomePage;
