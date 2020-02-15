import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';

export const NavBar: React.FC = () => {
    return (
      <div className="banner">
        <nav>
          <ul className="nav-bar">
            <li className="nav-link"> <Link to="/">HOME</Link></li>
            <li className="nav-link"> <Link to="/about">ABOUT</Link> </li>
            <li className="nav-link"> <Link to="/contact">CONTACT</Link></li>
            <li className="nav-link"> <a href="https://mgwismer.github.io/PhotoGallery/ThePath.html#buttons">HISTORY</a></li>
          </ul>
        </nav>
      </div>
    );
  }
