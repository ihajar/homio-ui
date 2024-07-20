import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";


function Navbar() {
  const [open, setOpen] = useState(false)
  const user = true;

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png " alt="Logo" />
          <span>Homio</span>
        </Link>
      </div>
      <div className="center">
        <Link to="/">Home</Link>
        <Link to="/">Agents</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <button>
              <Link to="/profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </button>
          </div>
        ) : (
          <>
            <Link to="/">Sign In</Link>
            <Link to="/" className="register">
              Sign Up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">Agents</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          {user ? (
            <button>
              <Link to="/profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </button>
          ) : (
            <>
              <Link to="/">Sign In</Link>
              <Link to="/">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
