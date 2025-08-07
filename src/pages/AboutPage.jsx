import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
          📚 About FlashMind – Learn Smarter, Faster
        </h1>

        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          <strong>FlashMind</strong> is a lightweight, open-source flashcard web app
          inspired by Anki – designed for modern frontend developers. Practice, memorize,
          and revise key concepts in HTML, CSS, JavaScript, React, and more.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">📖 Documentation</h2>
          <p className="text-gray-700 mb-2">
            Check out the official documentation for setup, contribution guidelines, and
            custom topics:
          </p>
          <a
            href="https://github.com/vikaschamyal/anki-lite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            👉 GitHub Repo & Docs
          </a>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">👨‍💻 Creator</h2>
          <p className="text-gray-700 mb-2">
            Built by <strong>Vikas Chamyal</strong>, a frontend developer passionate
            about building clean, fast, and useful web apps for learners.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/vikaschamyal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                github.com/vikaschamyal
              </a>
            </li>
            <li>
              Portfolio:{" "}
              <a
                href="https://portfolio-lac-six-83.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                vikaschamyal.com
              </a>
            </li>
            <li>
              Contact:{" "}
              <a
                href="mailto:vikaschamyal01@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                vikaschamyal@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-2">💡 Need Help or Support?</h2>
          <p className="text-gray-700 mb-2">
            If you encounter any bugs, issues, or have suggestions, feel free to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Open an issue on GitHub</li>
            <li>Contact the creator via email or portfolio</li>
            <li>Follow on GitHub to stay updated</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">🤝 Join the Team</h2>
          <p className="text-gray-700">
            Want to collaborate and expand this learning platform? We welcome contributors
            from all levels – developers, designers, content creators.
          </p>
          <p className="text-gray-700 mt-2">
            DM on GitHub or email to join the dev squad and shape the future of flashcard-based learning.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="text-indigo-600 font-medium hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
