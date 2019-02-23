import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import { App, Login, Signup, ForgotPassword, NotFound } from "./containers";

export default class Routes extends React.Component {
  render() {
    return (
      <App>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </App>
    );
  }
}
