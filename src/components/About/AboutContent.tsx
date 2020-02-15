import React from 'react';
import './about.scss'
import { Link } from 'react-router-dom';

export const AboutContent = () => (
  <div className={'about-container'}>
    <h2> About Page </h2>
    <section> I build some really awesome websites.</section>
    <p> How would you like to do the same?
    </p>
    <h3> Check out the <Link to={"/contact"}>contacts</Link>  page </h3>
  </div>
)
