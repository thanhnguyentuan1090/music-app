import React from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Song from "./components/Song";
import Player from "./components/Player";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MusicList from "./pages/MusicList";
import NotfoundPages from "./pages/NotfoundPages";

export default function App() {
  return (
    <>
      <div>
        <TopBar></TopBar>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <SideBar></SideBar>
        {/* <Song></Song> */}
      </div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nhac-tre" element={<MusicList />} />
            <Route path="/nhac-trinh" element={<MusicList />} />
            <Route path="*" element={<NotfoundPages />} />
          </Routes>
        </BrowserRouter>

        {/* <Player></Player> */}
      </div>
    </>
  );
}
