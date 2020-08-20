import React from 'react';
import { Link } from 'react-scroll';

export default function Main({ id }) {
  return (
    <div id={id} className="welcome">
      <div className="text-center welcome-content">
        {/* <h1 className="welcomeText">Welcome to My Portfolio</h1> */}
        <h1 className="welcomeText">Hello, I'm <span id="me">Gokul J</span></h1>
        <p className="desc">MERN Stack Web Developer | Java Developer</p>
        <button className="view-works p-0"><Link className="view" activeClass="active" to="skills" offset={-50} smooth={true} duration={500}>VIEW MY WORK <i className="fas fa-arrow-down ml-1"></i></Link></button>
      </div>
    </div>
  )
}