import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home";

const AppRouter = () => (
  <Switch>
    <Route path="/" exact render={props => <Home {...props} />} />
  </Switch>
);

export default AppRouter;
