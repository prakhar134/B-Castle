import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import about from "../Pages/About/about";
import home from "../Pages/Home/home";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
