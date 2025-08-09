import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuizPlayPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/quiz/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setQuiz(res.data);
        setAnswers(new Array(res.data.questions.length).fill(null));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleAnswer = (questionIndex, optionIndex) => {
    const updated = [...answers];
    updated[questionIndex] = optionIndex; // store index, not text
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/quiz/${id}/submit`,
        {
          answers: answers.map((selectedOptionIndex, idx) => ({
            questionId: quiz.questions[idx]._id,
            selectedOption: selectedOptionIndex,
          })),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setScore(res.data.score);
      setTimeout(() => navigate(`/quiz/${id}/leaderboard`), 3000);
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit quiz, please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading quiz...</p>;
  if (!quiz) return <p style={{ textAlign: "center" }}>Quiz not found.</p>;

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fafafa",
        borderRadius: 10,
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#222" }}>
        {quiz.title}
      </h1>

      {quiz.questions.map((q, idx) => (
        <div
          key={q._id}
          style={{
            marginBottom: 20,
            padding: 15,
            backgroundColor: "#fff",
            borderRadius: 6,
            boxShadow: "0 0 6px rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: 10 }}
          >
            {idx + 1}. {q.question}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {q.options.map((opt, oidx) => (
              <button
                key={oidx}
                onClick={() => handleAnswer(idx, oidx)}
                disabled={submitting}
                style={{
                  padding: "8px 16px",
                  borderRadius: 5,
                  border:
                    answers[idx] === oidx
                      ? "2px solid #28a745"
                      : "1px solid #ccc",
                  backgroundColor: answers[idx] === oidx ? "#d4edda" : "#fff",
                  cursor: "pointer",
                  fontWeight: answers[idx] === oidx ? "700" : "400",
                  transition: "all 0.3s ease",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={submitting}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "white",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: 8,
          cursor: submitting ? "not-allowed" : "pointer",
          opacity: submitting ? 0.6 : 1,
          marginTop: 10,
        }}
      >
        {submitting ? "Submitting..." : "Submit Quiz"}
      </button>

      {score !== null && (
        <p
          style={{
            marginTop: 15,
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#28a745",
          }}
        >
          Your Score: {score} / {quiz.questions.length}
        </p>
      )}
    </div>
  );
};

export default QuizPlayPage;
