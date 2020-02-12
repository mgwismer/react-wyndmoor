import React, { useCallback } from 'react';
import { ModalMessages } from '../constants/modal-messages';

type InfoProps = {
    handler: () => void;
    outText: (message: string) => void;
  }
  
export const InfoContent: React.FC<InfoProps> = ({ handler, outText }) => {
  
    const setText = useCallback((message) => {
      console.log('clicked the picture ', message);
      handler();
      outText(message);
    }, [handler, outText])
  
    return (
      <div className="image-container">
        <div
          className="nature-image"
          onClick={() => setText(ModalMessages.nature)}
        >
          <h2
            className="image-quote"> Stroll the paths </h2>
        </div>
        <div
          className="shops-image"
          onClick={() => setText(ModalMessages.shops)}
        >
          <h2 className="image-quote"> Savor the Delights</h2>
        </div>
        <div
          className="home-image"
          onClick={() => setText(ModalMessages.realEstate)} >
          <h2 className="image-quote"> Live the Dream </h2>
        </div>
        <div
          className="college-image"
          onClick={() => setText(ModalMessages.colleges)} >
          <h2 className="image-quote"> Find your Future </h2>
        </div>
      </div>
    );
  }
  