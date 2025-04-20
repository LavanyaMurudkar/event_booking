import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import musicFestImg from "../assets/images/musicfest.jpg";
import techSummitImg from "../assets/images/techsummit.jpg";
import foodFestImg from "../assets/images/foodfest.jpg";
import artImg from "../assets/images/art.jpg";

// Sample event list
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
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userName, setUserName] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [ratings, setRatings] = useState({});

  // Get data from localStorage on load
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setUserName(savedName);
    else {
      const name = prompt("Hi there! What's your name?");
      if (name) {
        localStorage.setItem("userName", name);
        setUserName(name);
      }
    }

    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);

    const savedRatings = JSON.parse(localStorage.getItem("eventRatings")) || {};
    setRatings(savedRatings);
  }, []);

  // Save wishlist to localStorage
  const handleWishlist = (eventId) => {
    let updatedWishlist;
    if (wishlist.includes(eventId)) {
      updatedWishlist = wishlist.filter((id) => id !== eventId);
    } else {
      updatedWishlist = [...wishlist, eventId];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Calculate average rating
  const getAverageRating = (eventId) => {
    const eventReviews = ratings[eventId] || [];
    if (eventReviews.length === 0) return "No Ratings";
    const avg = eventReviews.reduce((acc, val) => acc + val, 0) / eventReviews.length;
    return `★ ${avg.toFixed(1)}`;
  };

  const isTrending = (eventId) => {
    // simple logic: trending = saved more than once
    return wishlist.filter((id) => id === eventId).length >= 1;
  };

  return (
    <>
      <div className="home-container">
        <h1>Welcome to EventBooking</h1>
        {userName && <p>Hi {userName} 👋</p>}
        <p>Explore and book events happening around you! 🎉</p>

        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} onClick={() => setSelectedEvent(event)} />
              <h3>{event.title}</h3>
              <p>{event.location} • {event.date}</p>
              <p>{getAverageRating(event.id)}</p>
              {isTrending(event.id) && <span className="trending-tag">🔥 Trending</span>}
              <button
                className={`save-btn ${wishlist.includes(event.id) ? "saved" : ""}`}
                onClick={() => handleWishlist(event.id)}
              >
                {wishlist.includes(event.id) ? "❤️ Saved" : "♡ Save for later"}
              </button>
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
              onClick={() =>
                navigate("/booking-confirmed", { state: { event: selectedEvent } })
              }
            >
              Book Now
            </button>
          </div>
        )}
      </div>

      <style>{`
        .home-container {
          text-align: center;
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
          position: relative;
        }
        .event-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 4px;
        }
        .event-card .trending-tag {
          background: orange;
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 5px;
          font-size: 0.8rem;
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .event-details {
          margin-top: 3rem;
          padding: 2rem;
          border-top: 1px solid #ccc;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
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
        .save-btn {
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 0.5rem;
          color: #ff3b3b;
        }
        .save-btn.saved {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
