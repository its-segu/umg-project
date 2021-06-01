import React from "react";

export default () => {
  return (
    <div className="component third-component">
      <div
        style={{
          height: "10%",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/videoseries?list=PLb9UY1Wp8pyY-tlMc1-EV-qJnP31T8_m0"
        playlist="1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  );
};
