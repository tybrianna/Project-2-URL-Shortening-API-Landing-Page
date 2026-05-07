import "./Statistics.css";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2>Advanced Statistics</h2>

      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click and improve trust.
          </p>
        </div>

        <div className="stat-card">
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links.</p>
        </div>

        <div className="stat-card">
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness through customizable links.</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;