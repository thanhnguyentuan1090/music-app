import React from "react";
import MiniSong from "./MiniSong";

export default function SongListSection() {
  return (
    <div className="songList__container">
      <div>Top 100 nhạc trẻ </div>
      <div className="songList">
        <MiniSong></MiniSong>
        <MiniSong></MiniSong>
        <MiniSong></MiniSong>
        <MiniSong></MiniSong>
        <MiniSong></MiniSong>
        <MiniSong></MiniSong>
      </div>
    </div>
  );
}
