import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index';
import HUD from './components/HUD';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
      <Router>
        <Routes />
        <HUD/>
        <GlobalStyle/>
      </Router>
);

export default App;
