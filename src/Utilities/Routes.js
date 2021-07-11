import React from 'react';
import { Route, Switch } from 'react-router-dom';
import about from '../Pages/About/about';
import home from '../Pages/Home/home';
import Dash from '../Pages/Dashboard';
import history from './history';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch history={history}>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/dashboard" component={Dash} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
