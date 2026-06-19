import { Link } from "react-scroll"

function Footer() {
  return (
    <footer className="footer">
      <div className="section-divider"></div>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Rohit Dhok</p>
        <Link className="toTop" to="hero" smooth={true} offset={-100} duration={500}>Back to top ↑</Link>
      </div>
    </footer>
  )
}

export default Footer