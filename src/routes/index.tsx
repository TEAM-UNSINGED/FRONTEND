import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import List from '../pages/list';
import Voting from '../pages/votingScreen';
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/list" component={List} />
    <Route path="/votingSreen" component={Voting} />
  </Switch>
);

export default Routes;
