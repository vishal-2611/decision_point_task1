import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import UserList from "./Container/UserList";
import UserDetails from "./Container/UserDetails";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/info/:id" component={UserDetails} />
    </Switch>
  </Router>
);
