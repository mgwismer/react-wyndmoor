import React, { useState, useCallback } from 'react';
import { NavBar } from  './components/nav-bar';
import { Modal } from './components/Modal';
import { InfoContent} from './components/InfoContent';
import { MainContent} from './components/MainContent';
import './App.css';

const App: React.FC = () => {
  const [openState, setOpenState] = useState(false);
  const [textState, setTextState] = useState('');

  const toggleModal = (() => {
    console.log('open state', openState);
    setOpenState(!openState)
  });

  const renderText = useCallback((message: string) => {
    console.log('inside renderText',message)
    setTextState(message);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <MainContent handler={() => {}}/>
      <InfoContent handler={toggleModal} outText={renderText} />
      <Modal
        show={openState}
        onClose={toggleModal}
        message={textState}
      >
        This is my modal
      </Modal>
    </div>
  );
}

export default App;
