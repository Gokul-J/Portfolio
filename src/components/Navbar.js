import React from 'react';
import { Link } from 'react-scroll';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      background: "navbar navbar-expand-md navbar-dark fixed-top"
    }
  }

  toggleNav(event, id) {
    if (event === "true") {
      this.setState({ background: "navbar navbar-expand-md navbar-dark fixed-top" });
    }
    else {
      this.setState({ background: "navbar navbar-expand-md navbar-dark fixed-top bg-dark " });
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 5 ? "navbar navbar-expand-md navbar-dark fixed-top" : "navbar navbar-expand-md navbar-dark fixed-top bg-dark";

      this.setState({ background: backgroundcolor });
    });
  }

  render() {

    return (
      <nav className={this.state.background} >
        <a className="navbar-brand" href="#">MyWork</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <button className="nav-link"><Link activeClassName="active" to="main" smooth={true} duration={500} onClick={this.toggleNav.bind(this, "true")}>MAIN</Link></button>
            <button className="nav-link"><Link activeClassName="active" to="skills" offset={-100} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}>SKILLS</Link></button>
            <button className="nav-link"><Link activeClassName="active" to="projects" offset={-50} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}>PROJECTS</Link></button>
            <button className="nav-link"><Link activeClassName="active" to="contact" offset={-50} smooth={true} duration={500} onClick={this.toggleNav.bind(this, "false")}>CONTACT</Link></button>
          </div>
        </div>
      </nav>
    )
  }
}