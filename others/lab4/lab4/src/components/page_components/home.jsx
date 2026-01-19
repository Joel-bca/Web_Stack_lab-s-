import React from "react";
import "./page_css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="parallax hero">
        <div className="content">
          <h1>Plantcare & Watering Reminder System</h1>
          <p>
            Helping you keep your indoor and outdoor plants healthy,
            hydrated, and thriving.
          </p>
        </div>
      </section>

      <section className="section normal">
        <div className="welcome-message">
          <h2>Our Mission</h2>
          <p>
            Plantcare & Watering Reminder System is designed to assist plant
            owners in managing plant care efficiently. With automated
            watering reminders, plant tracking, and growth monitoring,
            we help prevent plant loss caused by under-watering or over-watering.
          </p>
        </div>

        <button className="primary-btn">
          <Link to="/about">Learn More About Us</Link>
        </button>
      </section>
    </>
  );
};

export default Home;
