import React, { useState, useMemo } from "react";

type MainProps = {
    handler: () => void;
  }

export const MainContent: React.FC<MainProps> = ({ handler }) => {
  
    const [isCyanState, setIsCyanState] = useState<boolean>(true)
  
    const styles = useMemo(() => {
      return ({ backgroundColor: isCyanState ? 'cyan' : 'pink' })
    }, [isCyanState])
    
    return (
      <div
        className="main-container"
        onMouseEnter={() => setIsCyanState(!isCyanState)}
        onClick={handler}
        style={styles}
      >
        <div className="main-container-header">
          <h1 className="main-container-heading"> 
            <p className='main-container-welcome'>Welcome</p>
            <p className='main-container-to'>to</p> 
            <p className='main-container-wyndmoor'>Wyndmoor</p>
          </h1>
        </div>
      </div>
    );
  }
  