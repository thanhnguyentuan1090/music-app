import React, { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import {PlayerContext} from '../contexts/PlayerContext'

export default function Player() {
  const {setIsPlay, isPlay} = useContext(PlayerContext);
  const handlePlay = () => {
      setIsPlay(!isPlay);
      if(isPlay){
        document.getElementById('react-audio-player').pause() 
      }else{
        document.getElementById('react-audio-player').play()
      }
  };

  return (
    <div className="playerBar">
      <FontAwesomeIcon icon={faArrowsRotate} />
      <FontAwesomeIcon icon={faBackwardStep} />
      <div>
          {isPlay 
          ?(<FontAwesomeIcon icon={faPause} onClick={handlePlay}/>)
          :(<FontAwesomeIcon icon={faPlay} onClick={handlePlay}/>)
          }
      </div>
      <FontAwesomeIcon icon={faForwardStep} />
      <FontAwesomeIcon icon={faShuffle} />

      {/* <div> 
       <button onClick={()=>{document.getElementById('react-audio-player').play()}}>Play</button> 
        <button onClick={()=>{document.getElementById('react-audio-player').pause()}}>Pause</button> 
        <button onClick={()=>{document.getElementById('react-audio-player').volume += 0.1}}>Vol +</button> 
        <button onClick={()=>{document.getElementById('react-audio-player').volume -= 0.1}}>Vol -</button> 
      </div> */}
    </div>
  );
}
