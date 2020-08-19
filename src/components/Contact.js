import React from 'react';
import { animateScroll as Scroll } from 'react-scroll';
import cv from '../assets/resume/RESUME.pdf';

export default function Contact({ id }) {
  return (
    <div id={id} className="text-center">
      <button className="top" onClick={Scroll.scrollToTop}><i class="goToTop fas fa-angle-double-up"></i></button>
      <div className="container">
        <div className="sector">
          <h1>CONTACT</h1>
          <hr className="style-one" />
        </div>
        <br/>
        <a href={cv} target="_blank" rel="noopener noreferrer">My CV</a><br />
        <span className="details">
          <a href="mailto: jgokul2000@gmail.com"><i class="contact-icon far fa-envelope"></i></a>
          {/* <span className="ml-3">jgokul2000@gmail.com</span> */}
        </span>
        <span className="details">
          <a href="https://github.com/Gokul-J"><i class="contact-icon fab fa-github"></i></a>
          {/* <span className="ml-3">https://github.com/Gokul-J</span> */}
        </span>
        <span className="details">
          <a href="https://stackoverflow.com/users/13096352/gokul-j"><i class="contact-icon fab fa-stack-overflow"></i></a>
          {/* <span className="ml-3">https://stackoverflow.com/users/13096352/gokul-j</span> */}
        </span>
        <span className="details">
          <a href="https://www.linkedin.com/in/gokul-j-42ba871b3/"><i class="contact-icon fab fa-linkedin-in"></i></a>
          {/* <span className="ml-3">https://www.linkedin.com/in/gokul-j-42ba871b3/</span> */}
        </span>
        <blockquote class="blockquote text-center">
          <p class="mb-0">When something is important enough, you do it even if the odds are not in your favour.</p>
          <footer class="blockquote-footer">Elon Musk <cite title="Source Title"></cite></footer>
        </blockquote>
        <p>GOKULJ©2020</p>
      </div>
    </div>
  )
}