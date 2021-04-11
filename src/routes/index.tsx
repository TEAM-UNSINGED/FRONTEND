import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import List from '../pages/list';
import Validate from '../pages/validate';
import Voting from '../pages/votingScreen';
import CandidateList from '../pages/candidatesList'

import EndEscreen from '../pages/endScreen';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/list" component={List} />
    <Route path="/validate" component={Validate} />
    <Route path="/voting" component={Voting} />
    <Route path="/candidatesList" component={CandidateList} />
    <Route path="/endScreen" component={EndEscreen} />
  </Switch>
);

export default Routes;
