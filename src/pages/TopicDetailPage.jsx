import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import frontendInterviewQuestions from "../data/frontendInterviewQuestions";
import reactQuestions from "../data/questions";

const TopicDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  let data = [];
  let title = "";

  if (id === "frontend-interview") {
    data = frontendInterviewQuestions;
    title = "Frontend Interview Flashcards";
  } else if (id === "react-basics") {
    data = reactQuestions;
    title = "React Basics Flashcards";
  } else {
    return (
      <div className="text-center text-red-600 mt-10 text-lg">
        ❌ Topic not found
      </div>
    );
  }

  // Get unique categories
  const categories = ["All", ...new Set(data.map((q) => q.category))];

  // Filtered data
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((q) => q.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8f9fa] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-cyan-600 text-sm hover:underline"
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold text-cyan-700 mt-4 text-center">
            🧠 {title}
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Carefully curated questions with clear answers. Read and learn at your pace.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 text-center">
          <label htmlFor="category" className="mr-2 font-medium text-gray-700">
            Filter by Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-md border border-gray-200 shadow-sm"
            >
              <p className="text-cyan-800 font-semibold text-sm">
                Q{index + 1}: {item.question}
              </p>
              <p className="text-gray-700 mt-2 text-sm">{item.answer}</p>
              <p className="mt-2 text-xs text-gray-400">📂 {item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicDetails;
