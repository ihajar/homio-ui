import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png " alt="Logo" />
          <span>Homio</span>
        </a>
      </div>
      <div className="center">
        <a href="/">Home</a>
        <a href="/">Agents</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
