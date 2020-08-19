import React from 'react';

export default function Contact({ id }) {
  return (
    <div id={id}>
      <div className="container">
        <h1 className="text-center sector">Contact</h1>
        <div className="details">
          <a href="mailto: jgokul2000@gmail.com"><i class="contact-icon far fa-envelope"></i></a>
          <span className="ml-3">jgokul2000@gmail.com</span>
        </div>
        <div className="details">
          <a href="https://github.com/Gokul-J"><i class="contact-icon fab fa-github"></i></a>
          <span className="ml-3">https://github.com/Gokul-J</span>
        </div>
        <div className="details">
          <a href="https://stackoverflow.com/users/13096352/gokul-j"><i class="contact-icon fab fa-stack-overflow"></i></a>
          <span className="ml-3">https://stackoverflow.com/users/13096352/gokul-j</span>
        </div>
        <div className="details">
          <a href="https://www.linkedin.com/in/gokul-j-42ba871b3/"><i class="contact-icon fab fa-linkedin-in"></i></a>
          <span className="ml-3">https://www.linkedin.com/in/gokul-j-42ba871b3/</span>
        </div>
      </div>
    </div>
  )
}