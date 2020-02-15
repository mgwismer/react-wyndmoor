import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import { NavBar } from  './components/nav-bar/nav-bar';
import { HomePage} from './components/HomePage/HomePage';
import { AboutContent } from './components/About/AboutContent';
import { ContactContent } from './components/Contact/ContactContent';
import './app.scss';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='content-container'>
          <Route exact path={'/'} component={HomePage}/>
          <Route path={'/about'} component={AboutContent} />
          <Route path={'/contact'} component={ContactContent} />
        </div>
      </Router>
    </div>
  );
}

export default App;
