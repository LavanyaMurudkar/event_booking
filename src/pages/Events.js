import { useState } from "react";
import Filter from "../components/Filter";
import EventCard from "../components/EventCard";
import BookingModal from "../components/BookingModal";
import reactConfImg from "../assets/images/reactconf.jpg";
import musicFestImg from "../assets/images/musicfest.jpg";
import startupImg from "../assets/images/startup.jpg";
import artImg from "../assets/images/art.jpg";
import foodfestImg from "../assets/images/foodfest.jpg";
import techsummitImg from "../assets/images/techsummit.jpg";
import photographyImg from "../assets/images/photography.jpg";
import yogaImg from "../assets/images/yoga.jpg";

const events = [
  {
    id: 1,
    title: "React Conference 2025",
    location: "Mumbai",
    date: "2025-06-15",
    type: "Tech",
    image: reactConfImg,
  },
  {
    id: 2,
    title: "Music Fest",
    location: "Delhi",
    date: "2025-07-10",
    type: "Music",
    image: musicFestImg,
  },
  {
    id: 3,
    title: "Startup Meetup",
    location: "Pune",
    date: "2025-08-05",
    type: "Business",
    image: startupImg,
  },
  {
    id: 4,
    title: "Art Exhibition",
    location: "Chennai",
    date: "2025-09-20",
    type: "Art",
    image: artImg,
  },
  {
    id: 5,
    title: "Food Festival",
    location: "Bangalore",
    date: "2025-10-12",
    type: "Food",
    image: foodfestImg,
  },
  {
    id: 6,
    title: "Tech Summit",
    location: "Hyderabad",
    date: "2025-11-25",
    type: "Tech",
    image: techsummitImg,
  },
  {
    id: 7,
    title: "Photography Workshop",
    location: "Mumbai",
    date: "2025-12-01",
    type: "Workshop",
    image: photographyImg,
  },
  {
    id: 8,
    title: "Yoga Retreat",
    location: "Kerala",
    date: "2025-12-15",
    type: "Health",
    image: yogaImg,
  }
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="events-container">
        <h1>Upcoming Events</h1>
        <Filter onFilter={setSearch} />
        <div className="event-grid">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBook={setSelectedEvent}
            />
          ))}
        </div>
        <BookingModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      </div>

      <style>{`
        .events-container {
          padding: 2rem;
        }
        .events-container h1 {
          margin-bottom: 1rem;
          font-size: 2rem;
          color: #333;
        }
        .event-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </>
  );
}
