import React from 'react';
import todo from '../assets/projects/todo-app.png';
import irctc from '../assets/projects/irctc-app.png';
import patatap from '../assets/projects/patatap-clone.png';
import Fade from 'react-reveal/Fade';

export default function Projects({ id }) {
  return (
    <div id={id}>
      <div className="container text-center">
        <div className="sector">
          <h1 className="heading">PROJECTS</h1>
          <hr className="style-one" />
        </div>
        <div className="card-group row">
        <Fade right cascade>
          <div className="col-lg-4">
            <div className="card">
              <img src={todo} className="card-img-top" alt="..." />
              <div className="text-center card-body d-flex flex-column">
                <h5 className="card-title">Todo App</h5>
                <p className="text-justify card-text">This is a simple TODO list making application that helps you to keep track of your pending works.</p>
                <a href="https://gokul-todo.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="visit-site m-auto mt-lg-4">VISIT SITE</a>
              </div>
            </div>
          </div>
          </Fade>
          <Fade right cascade delay={500}>
          <div className="col-lg-4">
            <div className="card">
              <img src={irctc} className="card-img-top" alt="..." />
              <div className="text-center card-body d-flex flex-column">
                <h5 className="card-title">IRCTC App</h5>
                <p className="text-justify card-text">This is a demo version of IRCTC Ticket Booking platform with minimal design and more functionalities.</p>
                <a href="https://gokul-irctc.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="visit-site m-auto mt-lg-4">VISIT SITE</a>
              </div>
            </div>
          </div>
          </Fade>
          <Fade right cascade delay={1000}>
          <div className="col-lg-4">
            <div className="card">
              <img src={patatap} className="card-img-top" alt="..." />
              <div className="text-center card-body d-flex flex-column">
                <h5 className="card-title">Patatap Clone</h5>
                <p className="text-justify card-text">This is a fun project to work. It is just a simple clone of official <a href="https://www.patatap.com/" target="_blank" rel="noopener noreferrer" className="patatap">Patatap</a> website using Paperjs and Howlerjs. </p>
                <a href="https://gokul-j.github.io/Patatap-Clone/" target="_blank" rel="noopener noreferrer" className="visit-site m-auto mt-lg-4">VISIT SITE</a>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}