import React from "react";
import "./page_css/home.css";
import { Link } from "react-router-dom";

  const Home = () => {
    return (
      <>
        <section className="parallax hero">
          <div className="content">
            <h1>Department of Physical Education</h1>
            <p>Promoting fitness, sports, and holistic development.</p>
          </div>
        </section>

        <section className="section normal">
          <div className="welcome-message">
            <h2>Our Mission</h2>
            <p>
              The Department of Physical Education is dedicated to developing
              physical fitness, discipline, and leadership through sports,
              wellness programs, and academic excellence.
            </p>
          </div>

          <button>
            <Link to="/about">Learn More About Us</Link>
          </button>
        </section>
      </>
    );
  };

export default Home;
