import { Link } from "react-scroll"

function Hero() {
  return (
    <section id="hero" className='hero'>
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Frontend Developer</span> <br />
          <span>Learning the stack.</span>
        </h1>

        <p className="hero-bio">
          I build clean, fast web experiences. Currently learning the PERN stack.
        </p>
        <p className="hero-name">- Rohit Dhok</p> 
      </div>
      <div className="hero-cta">
        <Link to="projects" smooth={true} offset={-100} duration={500}><p>Explore Projects</p></Link>
      </div>
    </section>
  )
}

export default Hero