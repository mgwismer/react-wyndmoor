import React, { useState, useMemo } from "react";

type MainProps = {
    handler: () => void;
  }

const colorArray = [
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
]

export const MainContent: React.FC<MainProps> = ({ handler }) => {
  
    const [colorIndex, setColorIndex] = useState<number>(0)
  
    const styles = useMemo(() => {
      return ({
        background: `radial-gradient(ellipse at top, ${colorArray[colorIndex]}, transparent),
            radial-gradient(ellipse at bottom, ${colorArray[colorIndex+1]}, transparent`
       })
    }, [colorIndex])
    
    const incrementColorIndex = () => {
      if (colorIndex === colorArray.length - 2) {
        setColorIndex(0);
      } else {
        setColorIndex(colorIndex + 1)
      }
    }

    return (
      <div
        className="main-container"
        onMouseEnter={incrementColorIndex}
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
  