import React from 'react';
import { animateScroll as Scroll } from 'react-scroll';
import cv from '../assets/resume/RESUME.pdf';

export default function Contact({ id }) {
  return (
    <div id={id} className="text-center">
      <button className="top" onClick={Scroll.scrollToTop}><i class="goToTop fas fa-angle-double-up"></i></button>
      <div className="container">
        <div className="sector">
          <h1 className="heading">CONTACT</h1>
          <hr className="style-one" />
        </div>
        <br />
        <a href={cv} target="_blank" rel="noopener noreferrer" className="cv"><i class="fas fa-file-pdf mr-2"></i> MY CV </a><br />
        <br />
        <div>
          <span className="details">
            <a href="mailto: jgokul2000@gmail.com" target="_blank" rel="noopener noreferrer"><i class="contact-icon far fa-envelope"></i></a>
            {/* <span className="ml-3">jgokul2000@gmail.com</span> */}
          </span>
          <span className="details">
            <a href="https://github.com/Gokul-J" target="_blank" rel="noopener noreferrer"><i class="contact-icon fab fa-github"></i></a>
            {/* <span className="ml-3">https://github.com/Gokul-J</span> */}
          </span>
          <span className="details">
            <a href="https://stackoverflow.com/users/13096352/gokul-j" target="_blank" rel="noopener noreferrer"><i class="contact-icon fab fa-stack-overflow"></i></a>
            {/* <span className="ml-3">https://stackoverflow.com/users/13096352/gokul-j</span> */}
          </span>
          <span className="details">
            <a href="https://www.linkedin.com/in/gokul-j-42ba871b3/" target="_blank" rel="noopener noreferrer"><i class="contact-icon fab fa-linkedin-in"></i></a>
            {/* <span className="ml-3">https://www.linkedin.com/in/gokul-j-42ba871b3/</span> */}
          </span>
        </div>
        <blockquote class="blockquote text-center">
          <p class="mb-0">When something is important enough, you do it even if the odds are not in your favour.</p>
          <footer class="blockquote-footer">Elon Musk <cite title="Source Title"></cite></footer>
        </blockquote>
        <p>GOKUL J©2020</p>
      </div>
    </div>
  )
}