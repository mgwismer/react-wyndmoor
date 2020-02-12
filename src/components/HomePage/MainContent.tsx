import React, { useState, useCallback, useMemo } from "react";

type MainProps = {
    handler: () => void;
  }

export const MainContent: React.FC<MainProps> = ({ handler }) => {
  
    const [styleState, setStyleState] = useState<string>('cyan')
  
    const toggleColor = useCallback(() => {
      setStyleState('pink');
    },[])
  
    const styles = useMemo(() => {
      return ({ backgroundColor: styleState })
    }, [styleState])
    
    return (
      <div
        className="main-header main-container"
        onMouseEnter={toggleColor}
        onClick={handler}
        style={styles}
      >
        <div className="main-header">
          <h1 className="h1-header"> Welcome <br /> to <br /> Wyndmoor </h1>
        </div>
      </div>
    );
  }
  