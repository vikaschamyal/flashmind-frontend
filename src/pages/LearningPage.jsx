import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import frontendInterviewQuestions from "../data/frontendInterviewQuestions";
import questions from "../data/questions";

const LearningPage = () => {
  const [frontendQs, setFrontendQs] = useState([]);
  const [reactQs, setReactQs] = useState([]);

  useEffect(() => {
    setFrontendQs(frontendInterviewQuestions);
    setReactQs(questions);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-10 sm:px-10">
      <div className="max-w-9xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-10">
          ⚛️ Frontend Flashcards
        </h1>

        {/* Frontend Interview Questions Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-indigo-200 transition-all duration-300 max-w-3xl mx-auto mb-8">
          <Link to="/learning/frontend-interview">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 hover:underline text-center">
              Frontend Interview Questions
            </h2>
          </Link>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            {frontendQs.slice(0, 3).map((q) => (
              <li
                key={q.id}
                className="hover:text-indigo-800 transition-colors duration-200"
              >
                {q.question}
              </li>
            ))}
          </ul>

          <div className="mt-6 text-center">
            <Link
              to="/learning/frontend-interview"
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              ➕ Explore more
            </Link>
          </div>
        </div>

        {/* React Basics Questions Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-indigo-200 transition-all duration-300 max-w-3xl mx-auto">
          <Link to="/learning/react-basics">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 hover:underline text-center">
              React Basics Questions
            </h2>
          </Link>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            {reactQs.slice(0, 3).map((q) => (
              <li
                key={q.id}
                className="hover:text-indigo-800 transition-colors duration-200"
              >
                {q.question}
              </li>
            ))}
          </ul>

          <div className="mt-6 text-center">
            <Link
              to="/learning/react-basics"
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              ➕ Explore more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
