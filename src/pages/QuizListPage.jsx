import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuizListPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/quiz`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        setQuizzes(res.data);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Available Quizzes
        </h1>

        {quizzes.length === 0 ? (
          <p className="text-center text-gray-500">
            No quizzes available. Check back later!
          </p>
        ) : (
          <div className="space-y-6">
            {quizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {quiz.title}
                </h2>
                <div className="flex gap-4">
                  <Link
                    to={`/quiz/${quiz._id}`}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                  >
                    Take Quiz
                  </Link>
                  <Link
                    to={`/quiz/${quiz._id}/leaderboard`}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                  >
                    Leaderboard
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizListPage;
