import { Link } from "react-scroll"

function Footer() {
  return (
    <footer className="footer">
      <div className="section-divider"></div>
      <div className="footer-content">
        <Link to="hero" smooth={true} offset={-100} duration={500}><p>Built with React & ❤️ by Rohit</p></Link>
      </div>
    </footer>
  )
}

export default Footer