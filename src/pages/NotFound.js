import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="notfound-container">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn’t exist.</p>
        <Link to="/" className="home-link">Go Home</Link>
      </div>

      <style>{`
        .notfound-container {
          text-align: center;
          padding-top: 5rem;
        }
        .notfound-container h1 {
          font-size: 2.5rem;
          color: #dc3545;
        }
        .notfound-container p {
          margin: 1rem 0;
          color: #555;
        }
        .home-link {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
        .home-link:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}
