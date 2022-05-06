import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Player from './Player'

function MusicControl({ link }) {
  return (
    <div className="music-control">
      <ReactAudioPlayer src={link} controls autoPlay id="react-audio-player" style={{display:'none'}}/>
      <Player />
    </div>
  );
}
export default MusicControl;
