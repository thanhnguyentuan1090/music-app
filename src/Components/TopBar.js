import React from "react";
import logo from "../assets/unnamed.png";
import "../App.css";
import Search from "./Search";
import { Link, Outlet } from "react-router-dom";
import SideBar from './SideBar'

export default function TopBar() {
  return (
    <>
    <div className="topbar">
      <div className="lefttopbar">
        <div className="logo">
          <img src={logo} className="logoimg" />
          <div className="stellio">Stellio</div>
        </div>
        <Link to="/">
          <div className="topbtn">Home </div>
        </Link>
        <div className="topbtn">Browser</div>
        <div className="topbtn">Upgrade</div>
      </div>
      <Search></Search>

      <div className="righttopbar">
        <div className="language">Languages</div>
        <div className="topbtn">Log In</div>
        <div className="topbtn">Sign Up</div>
      </div>
    </div>
    <SideBar />
    <Outlet/>
    </>
  );
}
