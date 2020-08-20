import React from 'react';
import { Link } from 'react-scroll';
import cv from '../assets/resume/RESUME.pdf';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      offset : ""
    }

    // this.getOffset = this.getOffset.bind(this);
  }

  toggleNav(event, id) {
    // document.getElementById("hidde").click();
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 5 ? "navbar navbar-expand-md navbar-dark fixed-top" : "navbar navbar-expand-md navbar-dark fixed-top bg-dark";

      this.setState({ background: backgroundcolor });
    });
    // document.addEventListener("click", () => {
    //   document.getElementById("hidde").click();
    // });
  }

  render() {

    return (
      <nav className="navbar-md navbar-expand-md sticky-top bg-dark " >
        {/* <p className="navbar-brand m-0 mr-4">MyWork</p> */}
        {/* <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span id="hidde" className="mr-2"><i class="fas fa-bars"></i></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mx-auto">
            <Link activeclassname="active" to="skills" offset={-25} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}><button className="p-0 nav-link px-3 mx-auto">SKILLS</button></Link>
            <Link activeclassname="active" to="projects" offset={-25} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}><button className="p-0 nav-link px-3 mx-auto">PROJECTS</button></Link>
            <Link activeclassname="active" to="main" smooth={true} duration={500} onClick={this.toggleNav.bind(this, "true")}><button className="nav-home p-0 nav-link px-3 mx-auto">HOME</button></Link>
            <Link activeclassname="active" to="contact" offset={-25} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}><button className="p-0 nav-link px-3 mx-auto">CONTACT</button></Link>
            <a href={cv} target="_blank" rel="noopener noreferrer" className="p-0 nav-link px-3 d-flex justify-content-center align-items-center">MY CV</a><br/>
          </div>
        </div>
      </nav>
    )
  }
}