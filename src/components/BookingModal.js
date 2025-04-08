import { useNavigate } from "react-router-dom";

export default function BookingModal({ event }) {
  const navigate = useNavigate();

  if (!event) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <h2>Booking: {event.title}</h2>
          <p>📍 Location: {event.location}</p>
          <p>📅 Date: {event.date}</p>
          <button onClick={() => navigate("/booking-confirmed", { state: { event } })}>
            Confirm Booking
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          text-align: center;
        }
        .modal button {
          margin-top: 1rem;
          padding: 0.5rem 1.2rem;
          background: #28a745;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .modal button:hover {
          background: #218838;
        }
      `}</style>
    </>
  );
}
