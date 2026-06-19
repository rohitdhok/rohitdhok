import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const projects = [
    {
      project_number: "01",
      project_title: "readme AI doctor",
      project_desc: "Score your README",
      tech_tags: ["React", "Javascript", "Gemini API"],
      github: "",
      live: ""
    },
  ]
  return (
    <section id="projects" className="projects">
      <span className="section-num">03</span>
      <h2 className="section-title">Projects</h2>
      <div className="section-divider"></div>
      <div className="projects-list">
        {projects.map(project => (
          <ProjectCard project={project}/>
        ))}
      </div>
    </section>
  )
}

export default Projects