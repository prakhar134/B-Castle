import React from 'react';
import { Route, Switch } from 'react-router-dom';
import about from '../Components/About/about';
import home from '../Pages/Home/home';
import Dash from '../Pages/Dashboard';
import history from './history';
import news from '../Pages/News/news';
import ProfileUpdate from '../Pages/Profile/profileUpdate';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch history={history}>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/news" component={news} />
        <Route path="/update" component={ProfileUpdate} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
