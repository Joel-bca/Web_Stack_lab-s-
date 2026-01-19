import React from "react";
import "./page_css/about.css";

const About = () => {
  const features = [
    {
      id: 1,
      name: "Plant Management",
      description:
        "Easily view and organize all your indoor and outdoor plants in one dashboard.",
      image:
        "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400",
      icon: "🌿",
    },
    {
      id: 2,
      name: "Watering Reminders",
      description:
        "Automated reminders ensure your plants receive the right amount of water at the right time.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
      icon: "💧",
    },
    {
      id: 3,
      name: "Growth Tracking",
      description:
        "Monitor plant growth stages and overall health over time.",
      image:
        "https://images.unsplash.com/photo-1598514982841-4e1d3f3e5c58?w=400",
      icon: "📈",
    },
    {
      id: 4,
      name: "Knowledge Base",
      description:
        "Access plant care tips, watering guides, and best practices.",
      image:
        "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=400",
      icon: "📚",
    },
  ];

  const highlights = [
    { number: "100+", label: "Plant Species Supported" },
    { number: "24/7", label: "Care Assistance" },
    { number: "Smart", label: "Watering Alerts" },
    { number: "Easy", label: "User Dashboard" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="parallax hero">
        <div className="content">
          <h1>About Plantcare</h1>
          <p>
            A smart solution designed to help plant owners maintain healthy and
            thriving plants effortlessly.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            The Plantcare & Watering Reminder System aims to support plant owners
            in maintaining proper care routines. By automating reminders and
            organizing plant information, we reduce plant loss caused by
            overwatering, underwatering, and neglect.
          </p>

          <div className="achievements-grid">
            {highlights.map((item, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{item.number}</div>
                <div className="achievement-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section sports-section">
        <h2>System Features</h2>
        <div className="sports-grid">
          {features.map((feature) => (
            <div key={feature.id} className="sport-card">
              <div className="sport-image">
                <img src={feature.image} alt={feature.name} />
                <div className="sport-icon">{feature.icon}</div>
              </div>
              <div className="sport-content">
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax */}
      <section className="parallax facilities">
        <div className="content">
          <h2>Designed for Plant Lovers</h2>
          <p>Simple, reliable, and effective plant care management</p>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <h2>Why Choose Plantcare?</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🌱 Simplicity</h3>
            <p>Easy-to-use interface suitable for beginners and experts.</p>
          </div>
          <div className="value-card">
            <h3>⏰ Timely Alerts</h3>
            <p>Never forget watering schedules again.</p>
          </div>
          <div className="value-card">
            <h3>📊 Organization</h3>
            <p>All plant details stored and accessible in one place.</p>
          </div>
          <div className="value-card">
            <h3>💚 Plant Health</h3>
            <p>Encouraging longer plant life and healthier growth.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
