import React from "react";
import { Route, Switch } from "react-router-dom";
import about from "../Components/About/about";
import home from "../Pages/Home/home";
import Dash from "../Pages/Dashboard";
import history from "./history";
import news from "../Pages/News/News";
import Trades from "../Pages/Trades/trades";
import ProfileUpdate from "../Pages/Profile/profileUpdate";
import AdminLogin from "../Pages/admin/adminLogin";
import AdminPanel from "../Pages/admin/adminPanel";
import User from "../Pages/admin/user";
import ResetPassword from "../Pages/ResetPassword";
import GoogleForm from "../Pages/googleForm";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch history={history}>
        <Route exact path="/" component={home} />
        <Route exact path="/plans" component={GoogleForm} />
        <Route path="/about" component={about} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/news" component={news} />
        <Route path="/my-trades" component={Trades} />
        <Route path="/update" component={ProfileUpdate} />
        <Route path="/admin/user/:id" component={User} />
        <Route path="/admin" component={AdminLogin} />
        <Route path="/adminPanel" component={AdminPanel} />
        <Route path="/reset/password/:token" component={ResetPassword} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
