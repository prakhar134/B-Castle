import React from 'react';
import { Route, Switch } from 'react-router-dom';
import about from '../Components/About/about';
import home from '../Pages/Home/home';
import Dash from '../Pages/Dashboard';
import history from './history';
import news from '../Pages/News/news';
import ProfileUpdate from '../Pages/Profile/profileUpdate';
import AdminLogin from '../Pages/admin/adminLogin';
import AdminPanel from '../Pages/admin/adminPanel';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch history={history}>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/news" component={news} />
        <Route path="/update" component={ProfileUpdate} />
        <Route path="/admin" component={AdminLogin} />
        <Route path="/adminPanel" component={AdminPanel} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
