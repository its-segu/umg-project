import React from "react";
import Shirt1 from "./assets/store/shirt1.png";
import Shirt2 from "./assets/store/shirt2.png";
import Poster from "./assets/poster.png";
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

export default () => {
  return (
    <div className="component fourth-component">
      <div
        style={{
          height: "9%",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <h1 className="fontfam">Shop</h1> */}
      </div>

      <Desktop>
      <div className="containerRow">
        <div className="content">
          <div className="content-overlay "></div>
          <img
            className="content-image"
            src={Shirt1}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MGMT Souvenir T-Shirt</h3>
            <p className="content-text" style={{fontSize: "16px"}}>$19.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>$24.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>19.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>19.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>$19.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>$24.99</p>
          </div>
        </div>
      </div>
      </Desktop>

      <Tablet>
      <div className="containerRow">
        <div className="content">
          <div className="content-overlay "></div>
          <img
            className="content-image"
            src={Shirt1}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MGMT Souvenir T-Shirt</h3>
            <p className="content-text" style={{fontSize: "16px"}}>$19.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>$24.99</p>
          </div>
          </a>
        </div>
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" />
          <div className="content-overlay" style={{fontSize: "16px"}}></div>
          <img
            className="content-image"
            src={Poster}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MGMT Poster</h3>
            <p className="content-text" style={{fontSize: "16px"}}>19.99</p>
          </div>
        </div>
      </div>

      <div className="containerRow">
        <div className="content">
          <a href="" target="_blank" />
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Poster}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">MGMT Poster</h3>
            <p className="content-text" style={{fontSize: "16px"}}>19.99</p>
          </div>
        </div>
        <div className="content">
          {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" /> */}
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={Shirt1}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">MGMT Souvenir T-Shirt</h3>
            <p className="content-text" style={{fontSize: "16px"}}>$19.99</p>
          </div>
        </div>
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" />
          <div className="content-overlay" style={{fontSize: "16px"}}></div>
          <img
            className="content-image"
            src={Shirt2}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Concert Tee</h3>
            <p className="content-text" style={{fontSize: "16px"}}>$24.99</p>
          </div>
        </div>
      </div>
      </Tablet>

      <Mobile>
      <div className="containerRow">
        <div className="content">
          <div className="content-overlay "></div>
          <img
            className="content-image"
            src={Shirt1}
            height="100%"
            width="100%"
          />
          <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MGMT Souvenir T-Shirt</h3>
            <p className="content-text" style={{fontSize: "16px"}}>$19.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>$24.99</p>
          </div>
          </a>
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
            <p className="content-text" style={{fontSize: "16px"}}>19.99</p>
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
            <p className="content-text" style={{fontSize: "16px"}}>$19.99</p>
          </div>
        </div>
      </div>
      </Mobile>
    </div>

  );
};



