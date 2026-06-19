import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="section-num">04</span>
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-divider"></div>

      <p className="contact-text">
        Have a project in mind or just want to connect? Reach out — I'd love to hear from you.
      </p>
      <a href="mailto:rohitdhok.dev@gmail.com" className="contact-email">rohitdhok.dev@gmail.com</a>
      <div className="contact-links">
        <a target='_blank' href="https://github.com/rohit-dhok" className="contact-github">GitHub</a>
        <a target='_blank' href="https://www.linkedin.com/in/rohit-dhok-704980417/" className="contact-linkedin">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact