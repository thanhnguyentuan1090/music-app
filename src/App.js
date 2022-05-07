import React from "react";

import TopBar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MusicList from "./pages/MusicList";
import NotfoundPages from "./pages/NotfoundPages";
import PlayerContextProvider from "./contexts/PlayerContext";

export default function App() {
  return (
    <>
    <div className="App">
    <PlayerContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<TopBar />} >

               <Route path="/" element={<Home />} />
               <Route path="/nhac-tre" element={<MusicList />} />
               <Route path="/nhac-trinh" element={<MusicList />} />
               <Route path="/E-D" element={<MusicList />} />
               <Route path="/pop" element={<MusicList />} />
               <Route path="/Rap" element={<MusicList />} />
               <Route path="/Jazz" element={<MusicList />} />
               <Route path="/Coutry" element={<MusicList />} />
               <Route path="/latin" element={<MusicList />} />
               <Route path="/japan" element={<MusicList />} />
               <Route path="/korea" element={<MusicList />} />
               <Route path="/koloi" element={<MusicList />} />
               <Route path="/rapviet" element={<MusicList />} />
               <Route path="*" element={<NotfoundPages />} />

            </Route>
          </Routes>
        </BrowserRouter>
        </PlayerContextProvider>
    </div>
    </>
  );
}
