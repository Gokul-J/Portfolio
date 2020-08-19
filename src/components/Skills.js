import React from 'react';
import mongodb from '../assets/mongodb.png';
import restapi from '../assets/restapi.png';
import redux from '../assets/redux.png';

export default function Skills({ id }) {
  return (
    <div id={id}>
      <div className=" container">
        <h1 className="sector text-center">SKILLS</h1>
        {/* <p>Iam a MERN Stack Web </p> */}
        <div className="row text-center">
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-html5"></i></div>
            <p className="title text-center">HTML</p>
          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-css3-alt"></i></div>
            <p className="title text-center">CSS</p>
          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-js-square"></i></div>
            <p className="title text-center">JavaScript</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-bootstrap"></i></div>
            <p className="title text-center">Bootstrap</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-react"></i></div>
            <p className="title text-center">React</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><img src={redux} className="redux" /></div>
            <p className="title text-center">React-Redux</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-node"></i></div>
            <p className="title text-center">Nodejs</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><img src={mongodb} className="mongodb" /></div>
            <p className="title text-center">MongoDB</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-github"></i></div>
            <p className="title text-center">GIT</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-java"></i></div>
            <p className="title text-center">Java</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><i class="fab fa-python"></i></div>
            <p className="title text-center">Python</p>

          </div>
          <div className="col-3">
            <div id="hexagon"><img src={restapi} className="restapi" /></div>
            <p className="title text-center">REST Api</p>

          </div>
        </div>
        {/* <div id="hexagon"></div>
        <div id="hexagon"></div>
        <div id="hexagon"></div>
        <div id="hexagon"></div>
        <div id="hexagon"></div>
        <div id="hexagon"></div>
        <div id="hexagon"></div> */}
      </div>
    </div>
  );
}