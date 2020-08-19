import React from 'react';
import { Link } from 'react-scroll';

export default function Main({ id }) {
  return (
    <div id={id} className="welcome">
      <div className="text-center welcome-content">
        <h1 className="welcomeText">Welcome to My Portfolio</h1>
        <h1 className="welcomeText">I'm Gokul J</h1>
        <p className="desc">MERN Stack Web Developer | Java Developer</p>
        {/* <button className="btn btn-primary">View My Works</button> */}
        <Link className="btn btn-primary" activeClass="active" to="skills" offset={-100} smooth={true} duration={500}>View My Works</Link>
      </div>
    </div>
  )
}