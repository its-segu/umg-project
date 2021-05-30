import React from "react";
import Shirt1 from "../../assets/store/shirt1.png";
import Shirt2 from "../../assets/store/shirt2.png";
import Poster from "../../assets/store/poster.png";

export default () => {
  return (
    <div className="component fourth-component">
      {/* <div
        style={{
          height: "10%",
          backgroundColor: "white",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="fontfam">Shop</h1>
      </div> */}


      <div className="containerRow">
        <div className="content">
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Shirt1}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MGMT Souvenir T-Shirt</h3>
            <p className="content-text">$19.99</p>
          </div>
        </div>
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Shirt2}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MGMT Tee</h3>
            <p className="content-text">$24.99</p>
          </div>
          </a>
        </div>
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" />
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Poster}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MGMT Poster</h3>
            <p className="content-text">19.99</p>
          </div>
        </div>
      </div>

      <div className="containerRow">
        <div className="content">
          {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" /> */}
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Poster}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">MGMT Poster</h3>
            <p className="content-text">19.99</p>
          </div>
        </div>
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" />
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Shirt1}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">MGMT Souvenir T-Shirt</h3>
            <p className="content-text">$19.99</p>
          </div>
        </div>
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" />
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Shirt2}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Concert Tee</h3>
            <p className="content-text">$24.99</p>
          </div>
        </div>
      </div>
   
    </div>

  );
};



