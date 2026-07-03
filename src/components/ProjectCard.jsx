import React from 'react'

function ProjectCard({project}) {
  return (
    <div className="ProjectCard" id="projectCard">
      <span className="project-number">{project.project_number}</span>
      <h3 className="project-title">{project.project_title}</h3>
      <p className="project-desc">{project.project_desc}</p>
      <div className="tech-tags">
        {project.tech_tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="links-row">
        <a href={project.github} target="_blank">GitHub ↗</a>
        <a href={project.live} target="_blank">Live ↗</a>
      </div>
      <div className="section-divider"></div>
    </div> 
  )
}

export default ProjectCard