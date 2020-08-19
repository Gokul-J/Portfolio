import React from 'react';
import todo from '../assets/projects/todo-app.png';
import irctc from '../assets/projects/irctc-app.png';
import patatap from '../assets/projects/patatap-clone.png';

export default function Projects({ id }) {
  return (
    <div id={id}>
      <div className="container text-center">
        <div className="sector">
          <h1>PROJECTS</h1>
          <hr className="style-one" />
        </div>
        <div class="card-group row">
          <div className="col-md-4">
            <div class="card">
              <img src={todo} class="card-img-top" alt="..." />
              <div class="text-center card-body">
                <h5 class="card-title">Todo App</h5>
                <p class="text-justify card-text">This is a simple TODO list making application that helps you to keep track of your pending works.</p>
                <a href="https://gokul-todo.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="visit-site btn btn-success mt-2 mt-md-4">Visit Site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={irctc} class="card-img-top" alt="..." />
              <div class="text-center card-body">
                <h5 class="card-title">IRCTC App</h5>
                <p class="text-justify card-text">This is a demo version IRCTC Ticket Booking platform with minimal design and more functionalities.</p>
                <a href="https://gokul-irctc.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="visit-site btn btn-success mt-2 mt-md-4">Visit Site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={patatap} class="card-img-top" alt="..." />
              <div class="text-center card-body">
                <h5 class="card-title">Patatap Clone</h5>
                <p class="text-justify card-text">This is a fun project to work. It is just a simple clone of official <a href="https://www.patatap.com/" target="_blank" rel="noopener noreferrer">Patatap</a> website using Paper js and Howler js. </p>
                <a href="https://gokul-j.github.io/Patatap-Clone/" target="_blank" rel="noopener noreferrer" class="visit-site btn btn-success mt-2 mt-md-4">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}