import React from 'react'
import skills from './data/skills.json'
const Skills = () => {
  return (
    <>
     <div className='container skills' id='skills'>
      <h1>skills</h1>
      <div className='items'>
      {skills.map((data, index) => (
  <div
    className='item'
    key={data.id || index}  // Use `index` as a fallback
    data-aos="flip-left"
    data-aos-duration="1000"
  >
    <h3>{data.title}</h3>
  </div>
))}
-

      </div>
    </div>
    </>
   
  )
}

export default Skills
