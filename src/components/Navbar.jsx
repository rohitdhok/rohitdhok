import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        Rohit
      </div>
      <div className="hamburger-icon">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="hamBtn" size={24}/> : <Menu className="hamBtn" size={24}/>}
        </button>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="about" smooth={true} offset={-120} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="skills" smooth={true} offset={-80} duration={500} onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="projects" smooth={true} offset={-80} duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="contact" smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar