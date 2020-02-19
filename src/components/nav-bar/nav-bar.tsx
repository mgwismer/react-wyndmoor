import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.scss';

type OwnProps = {
  historyLinkClick: () => void;
};

export const NavBar: React.FC<OwnProps> = ({ historyLinkClick }) => {
    return (
      <div className="banner">
        <nav>
          <ul className="nav-bar">
            <li className="nav-link"> <NavLink style={{ textDecoration: 'none' }} to="/">HOME</NavLink></li>
            <li className="nav-link"> <NavLink style={{ textDecoration: 'none' }} to="/about">ABOUT</NavLink> </li>
            <li className="nav-link"> <NavLink style={{ textDecoration: 'none' }} to="/contact">CONTACT</NavLink></li>
            <li className="nav-link"> <div onClick={historyLinkClick}>HISTORY</div></li>
          </ul>
        </nav>
      </div>
    );
  }
