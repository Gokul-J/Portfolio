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
    document.getElementById("hidde").click();
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
      <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark py-3" >
        {/* <p className="navbar-brand m-0 mr-4">MyWork</p> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span id="hidde" className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mx-auto">
            <button className="p-0 nav-link mb-3 mb-md-0 mx-2"><Link className="px-2" activeClassName="active" to="main" smooth={true} duration={500} onClick={this.toggleNav.bind(this, "true")}>HOME</Link></button>
            <button className="p-0 nav-link mb-3 mb-md-0 mx-2"><Link className="px-2" activeClassName="active" to="skills" offset={-25} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}>SKILLS</Link></button>
            <button className="p-0 nav-link mb-3 mb-md-0 mx-2"><Link className="px-2" activeClassName="active" to="projects" offset={-25} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}>PROJECTS</Link></button>
            <button className="p-0 nav-link mb-3 mb-md-0 mx-2"><Link className="px-2" activeClassName="active" to="contact" offset={-25} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}>CONTACT</Link></button>
            <a href={cv} target="_blank" rel="noopener noreferrer" className="p-0 nav-link mb-3 mb-md-0 mx-2 mx-auto">MY CV</a><br/>
          </div>
        </div>
      </nav>
    )
  }
}