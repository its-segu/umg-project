import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./index.css";
import FullPage from "./FullPage";
import PageContain from "./PageContain";

import "./index.css";

class Demo extends React.Component {
  render() {
    return (
      <div>
        <FullPage/>
      </div>
    );
  }
}

ReactDOM.render(
  <Router basename="/demos">
    <div>
      <Switch>
        <Route exact path="/" component={Demo} />
        <Route path="/fullpage" component={FullPage} />
        <Route path="/contain" component={PageContain} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root"),
);
