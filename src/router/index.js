import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Home from '../page/home';
import Mobx from '../page/mobx';
import MobxTree from '../page/tree';

const Routers = () => (
  <Router>
    <>
      <Route exact path="/" component={(props) => <Home {...props} />} />
      <Route exact path="/home" component={(props) => <Home {...props} />} />
      <Route path="/mobx" component={Mobx} component={(props) => <Mobx {...props} />} />
      <Route path="/tree" component={MobxTree} component={(props) => <MobxTree {...props} />} />
    </>
  </Router>
);

export default Routers;