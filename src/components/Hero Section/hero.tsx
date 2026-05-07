import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>More than just shorter links</h1>

        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <button>Get Started</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="working"
        />
      </div>
    </section>
  );
};

export default Hero;