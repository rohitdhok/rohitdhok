import { Link } from "react-scroll"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Rohit
      </div>

      <ul className="nav-links">
        <li><Link to="about" smooth={true} offset={-120} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} offset={-100} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} offset={-100} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} offset={-70} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar