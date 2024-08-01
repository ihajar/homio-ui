import { Link } from "react-router-dom";
import "./footer.scss";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";


function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="container">
          <h2>Find your way</h2>
          <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/`}>Agents</Link></li>
            <li><Link to={`/`}>About</Link></li>
            <li><Link to={`/`}>Contact</Link></li>
          </ul>
        </div>
        <div className="container">
          <h2>Get Our newsletter</h2>
          <p>1 email exery Sunday morning. No spam.</p>
          <input type="text" placeholder="Enter your email" />
          <button>Sign up</button>
        </div>
        <div className="container">
          <video width={320} height={240} controls>
            <source src="/video.mp4"  type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bottom">
        <div className="socialMedia">
          <FaXTwitter style={{ fontSize: "25px", color: "#040415"}} />
          <FaLinkedin style={{ fontSize: "25px", color: "#040415"}} />
          <FaFacebook style={{ fontSize: "25px", color: "#040415"}} />
        </div>
        <div className="logo">
          <img src="/logo.png" alt="Homio-logo" />
        </div>
        <div className="terms">
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer