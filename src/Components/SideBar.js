import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList12,
  faClockRotateLeft,
  faMusic,
  faPodcast,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="library ">library</div>
      <div className="sideitem">
        <FontAwesomeIcon icon={faClockRotateLeft} />
        History
      </div>
      <div className="sideitem">
        <FontAwesomeIcon icon={faMusic} />
        Songs
      </div>
      <div className="sideitem">
        <FontAwesomeIcon icon={faList12} />
        Albums
      </div>
      <div className="sideitem">
        <FontAwesomeIcon icon={faPodcast} />
        Podcasts
      </div>
      <div className="sideitem">
        <FontAwesomeIcon icon={faMicrophone} />
        Artists
      </div>
    </div>
  );
}
