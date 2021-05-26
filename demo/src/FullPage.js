import React from "react";
import { Pager } from "react-bootstrap";
import ReactPageScroller from "../../src";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AudioPlayer from "react-h5-audio-player";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import Logo from "../../assets/Logo.png";


const navigation = [
  "",
  "MGMT",
  "The Band",
  "Tour Dates",
  "Merch",
  "Videos",
  "Analytics",
];

import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i < navigation.length; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {navigation[i]}
        </Pager.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
        <img src={Logo} style={{ fontColor: "red" }}  height={32}  />
        <div>
          {pagesNumbers}
        </div>
          <AudioPlayer
            autoPlay
            style={{}}
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
                    fontSize: "30px",
                    paddingTop: "5px",
                    color: "white",
                  }}
                />
              ),
              pause: (
                <PauseCircleFilledIcon
                  style={{
                    fontSize: "30px",
                    paddingTop: "5px",
                    color: "white",
                  }}
                />
              ),
            }}
          />
        </Pager>
      </React.Fragment>
    );
  }
}
