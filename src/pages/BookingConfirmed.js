import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookingConfirmed() {
  const { state } = useLocation();
  const event = state?.event;

  function generateGoogleCalendarLink(event) {
    const start = new Date(event.date).toISOString().replace(/-|:|\.\d\d\d/g, "");
    const end = new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      "Booked via EventWave!"
    )}&location=${encodeURIComponent(event.location)}`;
  }

  function getTimeRemaining(date) {
    const total = Date.parse(date) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  const [timeLeft, setTimeLeft] = useState(
    event?.date ? getTimeRemaining(event.date) : {}
  );

  useEffect(() => {
    if (!event?.date) return;

    const interval = setInterval(() => {
      const remaining = getTimeRemaining(event.date);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  return (
    <div className="confirmation-page">
      <h1>✅ Your booking has been confirmed!</h1>
      {event && (
        <>
          <h2>{event.title}</h2>
          <p>📍 {event.location}</p>
          <p>📅 {event.date}</p>

          {timeLeft.total > 0 ? (
            <div className="countdown">
              ⏳ Starts in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>
          ) : (
            <div className="countdown">🎉 The event is happening now!</div>
          )}
        </>
      )}
      <div className="actions">
        <button onClick={() => alert("Event saved!")}>💾 Save Event</button>
        <button
          onClick={() =>
            navigator.share
              ? navigator.share({
                  title: event?.title,
                  text: `Check out this event: ${event?.title}`,
                  url: window.location.href,
                })
              : alert("Sharing not supported on this browser.")
          }
        >
          📤 Share Event
        </button>
        <a
          href={generateGoogleCalendarLink(event)}
          target="_blank"
          rel="noreferrer"
        >
          <button className="calendar-btn">🗓️ Add to Google Calendar</button>
        </a>
      </div>

      <style>{`
        .confirmation-page {
          padding: 2rem;
          text-align: center;
        }
        .confirmation-page h1 {
          color: #28a745;
        }
        .confirmation-page h2 {
          margin-top: 1rem;
          color: #333;
        }
        .countdown {
          font-size: 1.2rem;
          color: #ff5722;
          margin: 1.5rem 0;
        }
        .actions {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .actions button {
          padding: 0.6rem 1.4rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }
        .actions button:first-child {
          background: #007bff;
          color: white;
        }
        .actions button:nth-child(2) {
          background: #17a2b8;
          color: white;
        }
        .calendar-btn {
          background: #ffc107;
          color: #212529;
        }
        .actions button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
