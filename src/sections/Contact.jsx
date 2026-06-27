import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="section-num">04</span>
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-divider"></div>

      <p className="contact-text">
        Whether you have an opportunity, a project, or just want to say hello, I'd be happy to hear from you.
      </p>
      <a href="mailto:rohitdhok.dev@gmail.com" className="contact-email">rohitdhok.dev@gmail.com</a>
      <div className="contact-links">
        <a target='_blank' href="https://github.com/rohitdhok" className="contact-github">GitHub</a>
        <a target='_blank' href="https://www.linkedin.com/in/rohitdhok/" className="contact-linkedin">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact