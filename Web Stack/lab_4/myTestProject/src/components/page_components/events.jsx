import React from "react";
import "./page_css/events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Sports Meet",
      date: "March 15, 2024",
      status: "upcoming",
      description: "Join us for our annual sports meet featuring various athletic events.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400"
    },
    {
      id: 2,
      title: "Basketball Championship",
      date: "February 20, 2024",
      status: "ongoing",
      description: "Exciting basketball matches happening this week.",
      image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400"
    },
    {
      id: 3,
      title: "Yoga Workshop",
      date: "April 5, 2024",
      status: "upcoming",
      description: "Learn mindfulness and improve your flexibility with our yoga sessions.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    },
    {
      id: 4,
      title: "Swimming Competition",
      date: "January 30, 2024",
      status: "ongoing",
      description: "Watch talented swimmers compete in various categories.",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400"
    },
    {
      id: 5,
      title: "Martial Arts Tournament",
      date: "May 10, 2024",
      status: "upcoming",
      description: "Experience the intensity of martial arts competitions.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400"
    },
    {
      id: 6,
      title: "Athletics Training Camp",
      date: "March 8, 2024",
      status: "upcoming",
      description: "Professional training sessions for aspiring athletes.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400"
    }
  ];

  return (
    <>
      <section className="parallax hero">
        <div className="content">
          <h1>Events</h1>
          <p>Discover exciting sporting events, competitions, and activities happening at our department.</p>
        </div>
      </section>

      <section className="section events-section">
        <h2>Upcoming & Ongoing Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className={`event-card ${event.status}`}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className={`event-status ${event.status}`}>
                  {event.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                </div>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Events;
