import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import BookingConfirmed from "./pages/BookingConfirmed";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} EventBooking. All rights reserved.</p>
        </footer>
      </div>

      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
        }

        .main-content {
          flex: 1;
          padding: 20px;
        }

        .footer {
          background-color: #f1f1f1;
          padding: 16px;
          text-align: center;
          color: #666;
          font-size: 14px;
          border-top: 1px solid #ddd;
        }
      `}</style>
    </Router>
  );
}

