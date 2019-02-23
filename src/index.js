import React from "react";
import ReactDOM from "react-dom";

import createBrowserHistory from "history/createBrowserHistory";
import { Router } from "react-router";
import Routes from "./routes";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
);
