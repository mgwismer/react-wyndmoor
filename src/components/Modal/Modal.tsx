import React from 'react';
import './modal.scss';

type OwnProps = {
  onClose: () => void;
  onContinue?: () => void;
  showContinueButton?: boolean;
  title: string;
  show: boolean;
  message: string;
  children?: React.ReactNode;
};

export const Modal: React.FC<OwnProps> = ({ onClose, onContinue, show, message, title, children, showContinueButton = false }) => {

    return (
      show ? 
      <div className="backdrop">
        <div className="modal">
          <h2 className="modal-title">{title}</h2>
          <div className="modal-message">{message}</div>
          <div className="modal-footer">
            <button onClick={onClose}>
              Close
            </button>
            {showContinueButton && 
              <button onClick={onContinue}>
                Continue
              </button>
            }
          </div>
          {children}
        </div>
      </div> : null
    );
  }



