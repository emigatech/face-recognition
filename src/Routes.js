import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

import Home   from './pages/Home';
import Photo  from './pages/Photo';
import Video  from './pages/Video';
import Error  from './pages/Error';
import Navbar from './components/Navbar';

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Navbar/>
              <Home/>
            </Route>

            <Route exact path="/photo">
              <Navbar/>
              <Photo/>
            </Route>

            <Route exact path="/video">
              <Navbar/>
              <Video/>
            </Route>

            <Route path="*">
              <Error/>
            </Route>
          </Switch>
      </Router>
    );
  }
};
export default Routes;
