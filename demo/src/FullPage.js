import React from "react";
import { Pager } from "react-bootstrap";
import ReactPageScroller from "../../src";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
import Logo from "./assets/Logo.png";

const navigation = ["", "MGMT", "TOUR", "VIDEOS", "SHOP", "STATS"];

import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
  }

  handlePageChange = number => {
    console.log(number);
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
    // this.setState({ currentPage: number });
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i < navigation.length; i++) {
      pageNumbers.push(
        <Pager.Item
          className={`${this.state.currentPage === i - 1 ? "active" : ""}`}
          key={i}
          eventKey={i - 1}
          onSelect={this.handlePageChange}
        >
          {navigation[i]}
        </Pager.Item>,
      );
    }
    console.log(pageNumbers);

    return [...pageNumbers];
  };

  scrollToTop = () => {
    console.log("clicked");
    this.setState({ currentPage: 0 });
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
          <FifthComponent onClick={this.scrollToTop} />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          <img src={Logo} className="main-logo" height={27} />
          {pagesNumbers}
        </Pager>
      </React.Fragment>
    );
  }
}
