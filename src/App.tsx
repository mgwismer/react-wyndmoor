import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { NavBar } from  './components/nav-bar';
import { HomePage} from './components/HomePage/HomePage';
import { AboutContent } from './components/AboutContent';
import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path={'/'} component={HomePage}/>
        <Route path={'/about'} component={AboutContent} />
      </Router>
    </div>
  );
}

export default App;
