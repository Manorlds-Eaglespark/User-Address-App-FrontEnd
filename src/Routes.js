import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Footer from './components/common/Footer';
import history from './utils/history';
import landingPageComponent from './components/landingPageComponent';
import LoginComponent from './components/LoginComponent';
import homePageComponent from './components/homePageComponent';
import editAddressComponent from './components/editAddressComponent';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={landingPageComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/home" component={homePageComponent} />
        <Route exact path="/edit-address" component={editAddressComponent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
