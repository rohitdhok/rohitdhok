import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const projects = [
    {
      project_number: "01",
      project_title: "readme AI doctor",
      project_desc: "An AI-powered tool that reviews GitHub README files and provides suggestions to improve clarity, structure, and overall quality using the Gemini API.",
      tech_tags: ["React", "Javascript", "Gemini API"],
      github: "https://github.com/rohitdhok/readme-ai-doctor",
      live: "https://readme-ai-doctor-srqs.vercel.app/"
    },
    {
      project_number: "02",
      project_title: "GitHub Finder",
      project_desc: "Search GitHub users and explore their repositories, followers, and profile details using the GitHub API. Built to practice working with APIs, routing, and state management in React.",
      tech_tags: ["React", "Javascript", "GitHub API"],
      github: "https://github.com/rohitdhok/github-finder",
      live: "https://github-finder-six-green.vercel.app/"
    },
    {
      project_number: "03",
      project_title: "Resume Builder",
      project_desc: "A clean, minimal resume builder with AI-powered writing suggestions. Fill in your details, watch the resume build in real time, and download it as a PDF.",
      tech_tags: ["React", "JavaScript", "Gemini API"],
      github: "https://github.com/rohitdhok/resume-builder-ai",
      live: "https://resumo-liard.vercel.app/"
    }
  ]
  return (
    <section id="projects" className="projects">
      <span className="section-num">03</span>
      <h2 className="section-title">Featured Projects</h2>
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