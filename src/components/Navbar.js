import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">🎫 EventBooking</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
        </div>
      </nav>

      <style>{`
        .navbar {
          padding: 1rem 2rem;
          background: linear-gradient(to right, #007bff, #00c6ff);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links a {
          margin-left: 1rem;
          color: white;
          text-decoration: none;
          font-weight: 500;
        }
        .nav-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
