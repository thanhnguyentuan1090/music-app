import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faBackwardStep,
  faForwardStep,
  faPause,
  faRandom,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

export default function Player() {
  return (
    <div className="playerBar">
      <FontAwesomeIcon icon={faArrowsRotate} />
      <FontAwesomeIcon icon={faBackwardStep} />
      <FontAwesomeIcon icon={faPause} />
      <FontAwesomeIcon icon={faForwardStep} />
      <FontAwesomeIcon icon={faShuffle} />
    </div>
  );
};
