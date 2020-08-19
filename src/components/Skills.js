import React from 'react';
import mongodb from '../assets/skills/mongodb.png';
import restapi from '../assets/skills/restapi.png';
import redux from '../assets/skills/redux.png';

export default function Skills({ id }) {
  return (
    <div id={id}>
      <div className="container">
        <h1 className="sector text-center">SKILLS</h1>
        {/* <p>Iam a MERN Stack Web </p> */}
        <div className="row text-center">
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-html5"></i></div>
            <p className="title text-center">HTML</p>
          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-css3-alt"></i></div>
            <p className="title text-center">CSS</p>
          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-js-square"></i></div>
            <p className="title text-center">JavaScript</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-bootstrap"></i></div>
            <p className="title text-center">Bootstrap</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-react"></i></div>
            <p className="title text-center">React</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><img src={redux} alt="" className="redux" /></div>
            <p className="title text-center">React-Redux</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-node"></i></div>
            <p className="title text-center">Nodejs<br/>Expressjs</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><img src={mongodb} alt="" className="mongodb" /></div>
            <p className="title text-center">MongoDB</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-github"></i></div>
            <p className="title text-center">GIT</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-java"></i></div>
            <p className="title text-center">Java</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="skills-icon fab fa-python"></i></div>
            <p className="title text-center">Python</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><img src={restapi} alt="" className="restapi" /></div>
            <p className="title text-center">REST API</p>

          </div>
        </div>
      </div>
    </div>
  );
}