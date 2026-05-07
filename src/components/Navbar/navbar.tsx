import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Shortly</div>

      <ul className="nav-links">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <div className="nav-auth">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;