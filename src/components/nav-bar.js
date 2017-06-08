import React, { Component } from 'react';

export class NavBar extends Component {
  render() {
    return (
      <div className="banner">
        <nav>
          <ul className="nav-bar">
            <li className="nav-link"> <a href="">HOME</a></li>
            <li className="nav-link"> <a href="">ABOUT</a> </li>
            <li className="nav-link"> <a href="">CONTACT</a></li>
            <li className="nav-link"> <a href="">HISTORY</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
