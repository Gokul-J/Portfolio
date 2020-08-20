import React from 'react';
import mongodb from '../assets/skills/mongodb.png';
import restapi from '../assets/skills/restapi.png';
import redux from '../assets/skills/redux.png';

export default function Skills({ id }) {
  return (
    <div id={id}>
      <div className="container text-center">
        <div className="sector">
          <h1 className="heading">SKILLS</h1>
          <hr className="style-one" />
        </div>
        {/* <p>Iam a MERN Stack Web </p> */}
        <div className="row">
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-html5"></i></div>
            <p className="title text-center">HTML</p>
          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-css3-alt"></i></div>
            <p className="title text-center">CSS</p>
          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-js-square"></i></div>
            <p className="title text-center">JavaScript</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-bootstrap"></i></div>
            <p className="title text-center">Bootstrap</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-react"></i></div>
            <p className="title text-center">React</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><img src={redux} alt="" className="redux hover-effect" /></div>
            <p className="title text-center">Redux</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-node"></i></div>
            <p className="title text-center">Nodejs<br/>Expressjs</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><img src={mongodb} alt="" className="mongodb hover-effect" /></div>
            <p className="title text-center">MongoDB</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-github"></i></div>
            <p className="title text-center">GIT</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-java"></i></div>
            <p className="title text-center">Java</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><i class="skills-icon hover-effect fab fa-python"></i></div>
            <p className="title text-center">Python</p>

          </div>
          <div className="col-4 col-sm-4 col-md-3 mb-3 mb-md-0">
            <div id="hexagon"><img src={restapi} alt="" className="restapi hover-effect" /></div>
            <p className="title text-center">REST API</p>
          </div>
        </div>
      </div>
    </div>
  );
}