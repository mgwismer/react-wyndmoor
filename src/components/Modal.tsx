import React from 'react';

type OwnProps = {
  onClose: () => void;
  show: boolean;
  message: string;
};

export const Modal: React.FC<OwnProps> = ({ onClose, show, message }) => {
    console.log('modal ', message);
    // The gray background
    /** @type {{search: React.CSSProperties}} */
    const backdropStyle = {
      position: 'fixed' as 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      show ? 
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {message}
          <div className="footer">
            <button onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div> : null
    );
  }



