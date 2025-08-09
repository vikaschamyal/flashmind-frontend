import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LeaderboardPage = () => {
  const { id } = useParams();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/quiz/${id}/leaderboard`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        const data = await res.json();
        setLeaderboard(data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      }
    };
    fetchLeaderboard();
  }, [id]);

  return (
    <div style={{
      maxWidth: 600,
      margin: "2rem auto",
      padding: "1rem",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>Leaderboard</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {leaderboard.length === 0 && <p style={{ textAlign: "center" }}>No scores yet!</p>}
        {leaderboard.map((entry, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.75rem 1rem",
              backgroundColor: idx % 2 === 0 ? "#fff" : "#e6f7ff",
              borderRadius: 4,
              marginBottom: 8,
              fontWeight: "bold",
              color: "#007acc"
            }}
          >
            <span>{entry.username}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardPage;
