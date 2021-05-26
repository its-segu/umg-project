import React from "react";
import mgmt from "../../assets/MGMT.svg";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AudioPlayer from "react-h5-audio-player";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
// import "react-h5-audio-player/lib/styles.css";

export default () => {
  return (
    <div className="component first-component">
      <img src={mgmt} style={{ fontColor: "red" }} height={1000} width={1000} />
      <div></div>
    </div>
  );
};
