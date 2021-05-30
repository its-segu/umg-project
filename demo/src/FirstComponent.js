import React, { useEffect } from "react";
import mgmt from "../../assets/MGMT.svg";
import album from "../../assets/Album.png";
import { motion } from "framer-motion";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AudioPlayer from "react-h5-audio-player";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import AOS from "aos";
import "aos/dist/aos.css";

export default () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="component first-component">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <motion.img
          src={mgmt}
          style={{ opacity: "100%" }}
          height={650}
          width={650}
          data-aos="fade-down"
          // whileTap={{ scale: 0.9 }}
          // drag={true}
          // dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          // initial={{ opacity: 0, y: -100 }}
          // animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <div className="albumBanner" style={{ opacity: .64}} data-aos="fade-up">
        <h1 className="permanent-mark" style={{marginTop: -10, fontSize: 40, marginBottom: 20}}>New Release</h1>
          <div className="albumImage">
          <div>
          <AudioPlayer
            // autoPlay
            style={{marginBottom: 20}}
            src="../../assets/TheHandshake.mp3"
            onPlay={e => console.log("onPlay")}
            showJumpControls={false}
            showFilledVolume={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            showFilledProgress={false}
            showDownloadProgress={false}
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
          
          <h1 className="permanent-mark" style={{ textAlign: "right", color: "white" }}>
            "The Handshake"
          </h1>
          <h2 className="permanent-mark" style={{ textAlign: "right", color: "white" }}>
            June 2nd
          </h2>
          </div>
         </div>
        </div>
      </div>

      {/* <div className="banner"
        data-aos="fade-right"
        style={{opacity: .64}}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={album}
            style={{ fontColor: "red" }}
            height={180}
            width={180}
            style={{ padding: 20 }}
          />
          <h1 className="permanent-mark">New Release</h1>
        </div>
        <div style={{ paddingRight: 30 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
              paddingRight: 30,
            }}
          ></div>
          <h1 className="permanent-mark" style={{ textAlign: "right" }}>
            "The Handshake"
          </h1>
          <h2 className="permanent-mark" style={{ textAlign: "right" }}>
            June 2nd
          </h2>
        </div>
      </div>  */}
    </div>
  );
};
