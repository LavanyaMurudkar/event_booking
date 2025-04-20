import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill both fields");

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    window.dispatchEvent(new Event("storage"));
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h2>Login to EventBooking</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <style>{`
        .login-container {
          text-align: center;
          padding: 2rem;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 300px;
          margin: auto;
        }
        input {
          padding: 0.8rem;
          font-size: 1rem;
        }
        button {
          padding: 0.8rem;
          background: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
