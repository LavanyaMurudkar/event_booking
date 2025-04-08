import { useState } from "react";
import musicFestImg from "../assets/images/musicfest.jpg";
import techSummitImg from "../assets/images/techsummit.jpg";
import foodFestImg from "../assets/images/foodfest.jpg";
import artImg from "../assets/images/art.jpg";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Music Fest 2025",
    date: "2025-07-10",
    location: "Delhi",
    type: "Music",
    image: musicFestImg,
    description: "Join us for the biggest music celebration of the year!",
  },
  {
    id: 2,
    title: "Tech Summit 2025",
    date: "2025-08-22",
    location: "Bangalore",
    type: "Tech",
    image: techSummitImg,
    description: "Explore the future of technology with top innovators.",
  },
  {
    id: 3,
    title: "Food Festival",
    date: "2025-09-15",
    location: "Hyderabad",
    type: "Food",
    image: foodFestImg,
    description: "A paradise for food lovers with flavors from around the world!",
  },
  {
    id: 4,
    title: "Art Exhibition",
    date: "2025-10-01",
    location: "Mumbai",
    type: "Art",
    image: artImg,
    description: "Experience creativity from India’s finest artists.",
  },
];

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();


  return (
    <>
      <div className="home-container">
        <h1>Welcome to EventBooking</h1>
        <p>Explore and book events happening around you! 🎉</p>

        <div className="event-list">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => setSelectedEvent(event)}
            >
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.location} • {event.date}</p>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div className="event-details">
            <h2>{selectedEvent.title}</h2>
            <img src={selectedEvent.image} alt={selectedEvent.title} />
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Type:</strong> {selectedEvent.type}</p>
            <p>{selectedEvent.description}</p>

            <button
  className="book-button"
  onClick={() => navigate("/booking-confirmed", { state: { event: selectedEvent } })}
>
  Book Now
</button>
          </div>
        )}
      </div>

      <style>{`
        .home-container {
          text-align: center;
          margin-top: 2rem;
          padding: 1rem;
        }
        .event-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .event-card {
          width: 250px;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }
        .event-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .event-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 4px;
        }
        .event-details {
          margin-top: 3rem;
          padding: 2rem;
          border-top: 1px solid #ccc;
          text-align: left;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .event-details img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .book-button {
          background-color: #007bff;
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 1rem;
        }
        .book-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}
