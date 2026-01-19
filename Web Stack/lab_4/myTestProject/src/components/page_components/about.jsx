import React from "react";
import "./page_css/about.css";


const About = () => {
  const sports = [
    {
      id: 1,
      name: "Football",
      description: "Outdoor team sport focusing on fitness, endurance, and teamwork. Build leadership skills while staying active.",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400",
      icon: "⚽"
    },
    {
      id: 2,
      name: "Basketball",
      description: "Fast-paced indoor sport that enhances agility, coordination, and strategic thinking.",
      image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400",
      icon: "🏀"
    },
    {
      id: 3,
      name: "Athletics",
      description: "Track and field events including sprints, jumps, and throws. Perfect for individual excellence.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      icon: "🏃‍♂️"
    },
    {
      id: 4,
      name: "Yoga",
      description: "Ancient practice combining physical postures, breathing techniques, and meditation for holistic wellness.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      icon: "🧘‍♀️"
    },
    {
      id: 5,
      name: "Martial Arts",
      description: "Discipline and self-defense training that builds mental strength, focus, and physical conditioning.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      icon: "🥋"
    },
    {
      id: 6,
      name: "Swimming",
      description: "Full-body workout in water that improves cardiovascular health and builds endurance.",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400",
      icon: "🏊‍♂️"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Trained" },
    { number: "15+", label: "Sports Disciplines" },
    { number: "50+", label: "Championships Won" },
    { number: "10+", label: "Years of Excellence" }
  ];

  return (
    <>
      <section className="parallax hero">
        <div className="content">
          <h1>About Our Department</h1>
          <p>Excellence in sports education, fostering champions and building character through athletic excellence.</p>
        </div>
      </section>

      <section className="section mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            The Department of Physical Education is committed to developing well-rounded individuals through
            comprehensive sports programs. We believe that physical education is not just about competition,
            but about building character, discipline, and lifelong healthy habits.
          </p>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sports-section">
        <h2>Sports We Offer</h2>
        <div className="sports-grid">
          {sports.map((sport) => (
            <div key={sport.id} className="sport-card">
              <div className="sport-image">
                <img src={sport.image} alt={sport.name} />
                <div className="sport-icon">{sport.icon}</div>
              </div>
              <div className="sport-content">
                <h3>{sport.name}</h3>
                <p>{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="parallax facilities">
        <div className="content">
          <h2>State-of-the-Art Facilities</h2>
          <p>Equipped with modern amenities to support your athletic journey</p>
        </div>
      </section>

      <section className="section values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🏆 Excellence</h3>
            <p>Striving for the highest standards in athletic performance and personal development.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Teamwork</h3>
            <p>Building strong relationships and learning the importance of collaboration.</p>
          </div>
          <div className="value-card">
            <h3>💪 Discipline</h3>
            <p>Cultivating self-control, focus, and dedication in all aspects of life.</p>
          </div>
          <div className="value-card">
            <h3>🌱 Growth</h3>
            <p>Continuous improvement through challenges, learning, and perseverance.</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About