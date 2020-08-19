import React from 'react';
import { Link, animateScroll as Scroll } from 'react-scroll';

export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      background : "navbar navbar-expand-md navbar-dark fixed-top"
    }
  }

  toggleNav(event,id){
    if(event === "true"){
      this.setState({background : "navbar navbar-expand-md navbar-dark fixed-top"});
    }
    else{
      this.setState({background : "navbar navbar-expand-md navbar-dark fixed-top bg-dark "});
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
      <nav  className={this.state.background} >
        <a class="navbar-brand" href="#">MyWork</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item m-2">
              {/* <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a> */}
              <Link activeClass="active" to="main" smooth={true} duration={500} onClick={this.toggleNav.bind(this,"true")}>MAIN</Link>
            </li>
            <li class="nav-item m-2">
              {/* <a class="nav-link" href="#">ABOUT <span class="sr-only">(current)</span></a> */}
              <Link activeClass="active" to="skills" smooth={true} duration={500} onClick={this.toggleNav.bind(this,"false")}>SKILLS</Link>
            </li>
            <li class="nav-item m-2">
              {/* <a class="nav-link" href="#">PROJECTS </a> */}
              <Link activeClass="active" to="projects" smooth={true} duration={500} onClick={this.toggleNav.bind(this,"false")}>PROJECTS</Link>
            </li>
            <li class="nav-item m-2">
              {/* <a class="nav-link" href="#">CONTACT </a> */}
              <Link activeClass="active" to="contact" smooth={true} duration={500} onClick={this.toggleNav.bind(this,"false")}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}