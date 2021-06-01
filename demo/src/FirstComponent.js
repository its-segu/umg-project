import React, { useEffect } from "react";
import mgmt from "./assets/MGMT.svg";
import album from "./assets/Album.png";
import spotify from "./assets/spotify-logo.svg";
import Itunes from "./assets/itunes.svg";
import Twitter from "./assets/twitter.svg";
import Facebook from "./assets/facebook.svg";
import Soundcloud from "./assets/soundcloud-logo.svg";

import { motion } from "framer-motion";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AudioPlayer from "react-h5-audio-player";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import AOS from "aos";
import "aos/dist/aos.css";
import Soundfile from "./assets/TheHandshake.mp3";

export default () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="component first-component">
      <div className="bannerWrapper">
        <img  src={mgmt} className="imageFirstComp pulse" data-aos="fade-down" />
        <div
          className="albumBanner pulse"
          data-aos="fade-up"
          style={{ opacity: 0.64 }}
       
        >
          <div className="albumImage">
            <motion.div 
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            >
              <AudioPlayer
                autoPlay
                className="audio-player"
                src={Soundfile}
                onPlay={e => console.log("onPlay")}
                showJumpControls={false}
                showFilledVolume={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                showDownloadProgress={false}
                hasDefaultKeyBindings={true}
                customIcons={{
                  play: (
                    <PlayCircleOutlineIcon
                      style={{
                        fontSize: "175px",
                        paddingTop: "5px",
                        color: "white",
                      }}
                    />
                  ),
                  pause: (
                    <PauseCircleFilledIcon
                      style={{
                        fontSize: "175px",
                        paddingTop: "5px",
                        color: "white",
                      }}
                    />
                  ),
                }}
              />
            </motion.div>
          </div>
          <h1
          data-aos="fade-right"
            className="permanent-mark"
            style={{
              textAlign: "right",
              color: "black",
              marginBottom: "0px",
              marginTop: "5px",
              transform: "rotate(-15deg)",
              fontSize: 44,
            }}
          >
            "The Handshake"
          </h1>
          <h2
            className="permanent-mark"
            style={{
              textAlign: "right",
              color: "black",
              opacity: 100,
              transform: "rotate(-15deg)",
            }}
          >
            June 2nd
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 40,
              justifyContent: "center",
            }}
          >
            <a src=""/>
            <img
              src={Twitter}
              height={40}
              width={40}
              style={{ marginRight: 10, cursor: "pointer"}}
            />
            <img
              src={Facebook}
              height={40}
              width={40}
              style={{ marginRight: 10, cursor: "pointer" }}
            />
            <img
              src={Soundcloud}
              height={40}
              width={40}
              style={{ marginRight: 10, cursor: "pointer" }}
            />

            <img
              src={spotify}
              height={40}
              width={40}
              style={{ marginRight: 10, cursor: "pointer" }}
            />
            <img
              src={Itunes}
              height={40}
              width={40}
              style={{ marginRight: 10, cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
