import React from "react";
import mgmt from "../../assets/MGMT.svg";
import album from "../../assets/Album.png";

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AudioPlayer from "react-h5-audio-player";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
// import "react-h5-audio-player/lib/styles.css";

export default () => {
  return (
    <div className="component first-component">
      <img src={mgmt} style={{ fontColor: "red" }} height={775} width={775} />
      <div className="banner">
      <img src={album} style={{ fontColor: "red" }}  height={200} width={200} style={{padding: 20}}/>

      </div>
    </div>
  );
};
