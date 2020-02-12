import React from 'react';

export const NavBar: React.FC = () => {
    return (
      <div className="banner">
        <nav>
          <ul className="nav-bar">
            <li className="nav-link"> <a href="/">HOME</a></li>
            <li className="nav-link"> <a href="http://www.google.com">ABOUT</a> </li>
            <li className="nav-link"> <a href="https://thecultivator.wordpress.com/?WordPress=My+WordPress">CONTACT</a></li>
            <li className="nav-link"> <a href="https://mgwismer.github.io/PhotoGallery/ThePath.html#buttons">HISTORY</a></li>
          </ul>
        </nav>
      </div>
    );
  }
