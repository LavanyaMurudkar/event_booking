export default function EventCard({ event, onBook }) {
  return (
    <>
      <div className="event-card">
        {/* Image with fallback alt and optional style */}
        {event.image ? (
          <img src={event.image} alt={event.title} className="event-image" />
        ) : (
          <div className="image-placeholder">No Image Available</div>
        )}

        <div className="event-details">
          <h2>{event.title}</h2>
          <p>📍 {event.location}</p>
          <p>📅 {event.date}</p>
          <p>🎟️ Type: {event.type}</p>
          <button onClick={() => onBook(event)}>Book Now</button>
        </div>
      </div>

      <style>{`
        .event-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          background-color: #fff;
          transition: transform 0.3s;
          display: flex;
          flex-direction: column;
        }

        .event-card:hover {
          transform: translateY(-5px);
        }

        .event-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid #eee;
        }

        .image-placeholder {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0;
          color: #888;
          font-style: italic;
        }

        .event-details {
          padding: 1rem;
        }

        .event-details h2 {
          margin: 0 0 0.5rem;
          font-size: 1.2rem;
          color: #007bff;
        }

        .event-details p {
          margin: 0.2rem 0;
        }

        .event-details button {
          margin-top: 0.8rem;
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .event-details button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}
