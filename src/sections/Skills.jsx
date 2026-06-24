import React from 'react'

function Skills() {
  const skills = {
    frontend: ["HTML", "CSS", "Javascript", "React"],
    tools: ["Git", "GitHub"],
    learning: ["Node.js", "Express.js", "PostgreSQL"]
  };
  return (
    <section id="skills" className="skills">
      <span className="section-num">02</span>
      <h2 className="section-title">Skills</h2>
      <div className="section-divider"></div>
      <div className="skills-list">
        <div className='skills-category'>
          <p>Frontend :</p>
          { skills.frontend.map((skill, index) => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
        <div className='skills-category'>
          <p>Tools :</p>
          { skills.tools.map((skill, index) => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
        <div className='skills-category'>
          <p>Learning :</p>
          { skills.learning.map((skill, index) => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills