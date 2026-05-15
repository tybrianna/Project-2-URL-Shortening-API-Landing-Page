import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Shortly</h2>

      <div className="footer-links">
        <div>
          <h4>Features</h4>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>

        <div>
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;