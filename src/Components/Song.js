import React from "react";
import MiniSong from "./MiniSong";

export default function Song() {
  return (
    <div className="bigSongList">
      <div>
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
      <div>
        <div>Top 100 Pop </div>
        <div className="songList">
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
        </div>
      </div>

      <div>
        <div>Top 100 Korean </div>
        <div className="songList">
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
        </div>
      </div>

      <div>
        <div>Top 100 no lyric </div>
        <div className="songList">
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
          <MiniSong></MiniSong>
        </div>
      </div>
    </div>
  );
}
