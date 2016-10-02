import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Avatar from '../components/Avatar'


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="avatar" component={Avatar} />

    </Route>
  </Router>
);

export default routes;