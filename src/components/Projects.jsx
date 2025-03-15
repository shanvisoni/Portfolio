import React from 'react';
import project from './data/projects.json';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Projects = () => {
  return (
    <>
      <div className='container projects my-3' id="projects">
      <h1 style={{ color: '#00f0ff', marginTop: '60px', textAlign: 'center' }}>PROJECTS</h1>
        <div className='row d-flex justify-content-center align-content-center'>
          {project.map((data) => (
            <div key={data.key} className='my-4 col-sm-6 col-md-4 col-lg-3 mx-4'>
              <div
                className="card bg-dark text-light"
                style={{
                  width: '25rem',
                  border: '1px solid yellow',
                  boxShadow: '5px 5px 10px 0px rgba(101,175,10,0.5)',
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className='card-body text-center'>
                  <h5 className="card-title style={{ fontSize: '22px', fontWeight: 'bold' }}">{data.title}</h5>
                  <p className="card-text style={{ fontSize: '18px', lineHeight: '1.5' }}">
                    <strong>{data.description[0]}</strong>
                    <ul style={{ textAlign: 'left' }}>
                      {data.description.slice(1).map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </p>
                  {/* Conditionally render the Demo button */}
                  {data.demo && (
                    <StyledLink to={data.demo} className="btn btn-primary mx-3">
                      Demo
                    </StyledLink>
                  )}
                  <StyledLink to={data.source} className="btn btn-warning">
                    Code
                  </StyledLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
