import React from "react";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import Song from "./Components/Song";
import Player from "./Components/Player";

export default function App() {
  return (
    <>
      <div>
        <TopBar></TopBar>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <SideBar></SideBar>
        <Song></Song>
      </div>
      <div>
        <Player></Player>
      </div>
    </>
  );
}
