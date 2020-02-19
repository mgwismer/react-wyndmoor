import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';

type OwnProps = {
    clickCloseButton: () => void;
}
export const LeaveAppModal: React.FC<OwnProps> = ({ clickCloseButton }) => {

    const continueToPhotoGallery = () => {
        window.location.href = 'https://mgwismer.github.io/PhotoGallery/';
    }

    const textState = 'You are leaving this page/app and headed over to my personal history website, which is merely a photo-gallery with a few words thrown around. It is my first effort at building a fun site that combines flights of fancy with tales of whimsey and is built with javascript and jquery a technology, which shares the same status as vacuum tubes in the pantheon of technical progress, that is once considered essential until displaced by cleaner, sharper and infinitely more efficient systems. Continue if you\'re curious and you should be able to loop you\'re way back here from there.'
    return (
        <Modal
            show={true}
            onClose={clickCloseButton}
            onContinue={continueToPhotoGallery}
            showContinueButton={true}
            message={textState}
            title='Warning Modal - Do you really want to leave?'
        />
)}