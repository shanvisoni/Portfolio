

import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

//  const StyledLink = styled(Link)`
//    text-decoration: none;
//    color: white;
//  `;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold; /* Make it bold */
  margin: 0 15px; /* Add spacing between items */
  cursor: pointer;

  &:hover {
    color: #ffcc00; /* Optional: Change color on hover */
  }
`;

const Navbar = () => {
  return (
    <div className='container nav_bar ' data-aos="fade-down" data-aos-duration="1000">
      <div className='left nav_items'>Portfolio</div>
      <div className='right'>
        <StyledLink to="home" smooth={true} duration={500} className="nav_items">Home</StyledLink>
        {/* <StyledLink to="about" smooth={true} duration={500} className="nav_items">Experience</StyledLink> */}
        <StyledLink to="skills" smooth={true} duration={500} className="nav_items">Skills</StyledLink>
        <StyledLink to="projects" smooth={true} duration={500} className="nav_items">Projects</StyledLink>
        <StyledLink to="contact" smooth={true} duration={500} className="nav_items">Contact</StyledLink>
      </div>
    </div>
  );
};

export default Navbar;
