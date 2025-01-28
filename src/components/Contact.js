
import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact"> 
      

        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.linkedin.com/in/shanvi-soni-b80474258/" target="_blank" rel="noopener noreferrer" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/shanvisoni" target="_blank" rel="noopener noreferrer" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:shanvisoni7388@gmail.com" target="_blank" rel="noopener noreferrer" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;



















