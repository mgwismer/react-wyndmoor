import React, { useState, useCallback } from 'react';
import { MainContent } from './MainContent';
import { InfoContent } from './InfoContent';
import { Modal } from '../Modal/Modal';
import './home-page.scss';

export const HomePage: React.FC = () => {

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
        <div className='homepage-container'>
            <MainContent handler={toggleModal} />
            <InfoContent handler={toggleModal} outText={renderText}/>
            <Modal
                show={openState}
                onClose={toggleModal}
                message={textState}
            >
                This is my modal
            </Modal>
        </div>
    )
}