import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactAudioPlayer from "react-audio-player";
import {
  faArrowsRotate,
  faBackwardStep,
  faForwardStep,
  faPause,
  faRandom,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Player() {
  return (
    <div className="playerBar">
      <FontAwesomeIcon icon={faArrowsRotate} />
      <FontAwesomeIcon icon={faBackwardStep} />
      <div>
        <FontAwesomeIcon icon={faPause} />
      </div>
      <FontAwesomeIcon icon={faForwardStep} />
      <FontAwesomeIcon icon={faShuffle} />
    </div>
  );
}
