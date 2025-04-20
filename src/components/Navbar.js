import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    if (name) setUserName(name);
    if (email) setUserEmail(email);
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">🎫 EventBooking</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          {userName && (
            <div className="profile">
              <span>👤 {userName}</span>
              <small>{userEmail}</small>
            </div>
          )}
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
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }
        .nav-links a:hover {
          text-decoration: underline;
        }
        .profile {
          text-align: right;
        }
        .profile span {
          font-weight: bold;
        }
        .profile small {
          display: block;
          font-size: 0.75rem;
        }
      `}</style>
    </>
  );
}
