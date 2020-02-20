import React, { useState } from 'react';
import classNames from 'classnames';
import './contact.scss'

export const ContactContent: React.FC = () => {

    const buttonTextStates = ['INTERESTED', 'REALLY', 'TRY ME']

    const [buttonState, setButtonState] = useState(0);

    const handleButtonClicked = () => {
        setButtonState(buttonState+1);
    }

    const buttonClasses = classNames('big-jelly-btn', { 
        'big-jelly-btn__interested': buttonState === 0,
        'big-jelly-btn__really': buttonState === 1, 
        'big-jelly-btn__try': buttonState === 2
    });

    return (
        <div className='button-container'>
           {buttonState < 3 ?
            <button className={buttonClasses} onClick={handleButtonClicked}>
                <span>{buttonTextStates[buttonState]}</span>
            </button>
            : <h2 className='contact-text'>margaretgwismer@gmail.com</h2>}
        </div>
    )
}
