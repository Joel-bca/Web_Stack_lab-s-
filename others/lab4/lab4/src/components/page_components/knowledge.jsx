import React from "react";
import "./page_css/knowledge.css";

const KnowledgeBase = () => {
  const tips = [
    {
      id: 1,
      title: "Proper Watering",
      icon: "💧",
      description:
        "Avoid overwatering. Always check soil moisture before watering your plants.",
    },
    {
      id: 2,
      title: "Sunlight Requirements",
      icon: "☀️",
      description:
        "Different plants require different light levels. Place plants accordingly.",
    },
    {
      id: 3,
      title: "Soil Quality",
      icon: "🌱",
      description:
        "Use well-draining soil to prevent root rot and promote healthy growth.",
    },
    {
      id: 4,
      title: "Fertilizing",
      icon: "🪴",
      description:
        "Use fertilizers sparingly and according to plant needs for best results.",
    },
    {
      id: 5,
      title: "Seasonal Care",
      icon: "🍂",
      description:
        "Reduce watering during colder months and increase during growing seasons.",
    },
    {
      id: 6,
      title: "Pest Control",
      icon: "🐛",
      description:
        "Inspect plants regularly to detect pests early and treat naturally when possible.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="parallax hero">
        <div className="content">
          <h1>Plant Care Knowledge Base</h1>
          <p>Simple tips to help your plants stay healthy and green</p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section knowledge-section">
        <h2>Essential Plant Care Tips</h2>

        <div className="tips-grid">
          {tips.map((tip) => (
            <div key={tip.id} className="tip-card">
              <div className="tip-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default KnowledgeBase;
