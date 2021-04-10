import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import List from '../pages/list';
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/list" component={List} />
  </Switch>
);

export default Routes;
