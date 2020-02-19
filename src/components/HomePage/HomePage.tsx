import React, { useState, useCallback } from 'react';
import { MainContent } from './MainContent';
import { InfoContent } from './InfoContent';
import { Modal } from '../Modal/Modal';
import './home-page.scss';
import { FlyingBirds } from '../Birds/flying-birds';

export const HomePage: React.FC = () => {

  const [openState, setOpenState] = useState(false);
  const [textState, setTextState] = useState('');

  const toggleModal = (() => {
    setOpenState(!openState)
  });

  const renderText = useCallback((message: string) => {
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
                title='Dilly Dilly Modal'
            >
                <FlyingBirds />
            </Modal>
        </div>
    )
}