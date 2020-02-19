import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import { NavBar } from  './components/nav-bar/nav-bar';
import { HomePage} from './components/HomePage/HomePage';
import { AboutContent } from './components/About/AboutContent';
import { ContactContent } from './components/Contact/ContactContent';
import './app.scss';
import { LeaveAppModal } from './components/HistoryModal/leave-app-modal';

const App: React.FC = () => {
  const [appModalState, setAppModalState] = useState(false);
  
  const setLeaveAppState = () => {
    console.log('history clicked', appModalState);
    setAppModalState(true);
  }

  return (
    <div className="App">
      <Router>
        <NavBar historyLinkClick={setLeaveAppState} />
        <div className='content-container'>
          <Route exact path={'/'} component={HomePage}/>
          <Route path={'/about'} component={AboutContent} />
          <Route path={'/contact'} component={ContactContent} />
          {appModalState && <LeaveAppModal clickCloseButton={() => setAppModalState(false)}/>}
        </div>
      </Router>
    </div>
  );
}

export default App;
