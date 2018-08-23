import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './home';
import redux from './simple/redux';
import SimpleGoldenAcornApp from './simple/states';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/simple/states" component={SimpleGoldenAcornApp} />
      <Route path="/simple/redux" component={redux} />
    </Switch>
  </BrowserRouter>
);

export default Router;
