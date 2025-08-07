import React from "react";
import {
  FaCheckCircle,
  FaLightbulb,
  FaLock,
  FaSyncAlt,
  FaGraduationCap,
  FaTags,
  FaBrain,
} from "react-icons/fa";
import AboutPomodoro from "../components/AboutPomodoro";

const AnkiAbout = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-r from-sky-50 to-indigo-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-indigo-800">
          Welcome to <span className="text-blue-600">FlashMind</span>
        </h1>
        <p className="text-lg md:text-xl text-center mb-10 text-gray-700">
          Your personal memory booster — a secure, smart, and effective way to learn with Anki-style flashcards.
        </p>

        {/* What is Anki-Style Learning */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
            <FaGraduationCap /> What is Anki-Style Learning?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Anki-style learning is a scientifically proven approach that uses
            <strong> active recall</strong> and <strong>spaced repetition</strong> to enhance memory and long-term retention.
            Flashcards are digital notes with a front (question or keyword) and back (answer or explanation). Reviewing them consistently helps you move knowledge from short-term to long-term memory.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaLightbulb className="text-yellow-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Flashcard-Based Learning</h3>
            <p>
              Create and study cards with question/answer pairs to boost recall.
              Practice daily, track progress, and truly master concepts.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <FaLock className="text-green-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">User-Based Security</h3>
            <p>
              Your flashcards and notes are 100% private. Protected by JWT authentication,
              only you can create, view, and manage your learning materials.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <FaSyncAlt className="text-indigo-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Sync</h3>
            <p>
              Your changes update instantly without page reloads. Add, edit, or delete notes in real time and never lose progress.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <FaCheckCircle className="text-purple-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Simple, Clean UI</h3>
            <p>
              A distraction-free and responsive interface that works great on mobile and desktop.
              Focus purely on your learning without any noise.
            </p>
          </div>
        </div>
        <AboutPomodoro/>

        {/* Upcoming Features */}
        <div className="bg-indigo-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
            <FaBrain /> What's Coming Next?
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-base">
            <li><strong>Topic-Based Learning:</strong> Explore curated flashcards on Frontend, JavaScript, React, HTML, CSS, and more.</li>
            <li><strong>Search and Filter:</strong> Find flashcards instantly by topic or keyword (coming soon).</li>
            <li><strong>Tag Support:</strong> Organize your flashcards by categories like Interview, Concept, Code, etc. (coming soon).</li>
            <li><strong>Study Reminders:</strong> Daily prompts to review flashcards and avoid forgetting (planned).</li>
            <li><strong>Deck Management:</strong> Group your flashcards into custom decks for organized revision (upcoming).</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Why FlashMind?</h2>
          <p className="text-gray-700 leading-relaxed">
            FlashMind isn’t just another notes app — it’s a system that
            <strong> trains your brain to retain knowledge longer</strong>. Whether you're preparing for interviews, studying programming, or learning new skills — this is the smartest way to learn:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Save your personal flashcards securely</li>
            <li>Build your own question-answer decks</li>
            <li>Follow a deep, consistent learning method</li>
            <li>Accessible on any device anytime</li>
            <li>Built with React, Tailwind, Node.js, and MongoDB for speed and security</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            🚀 Ready to Build a Smarter Brain?
          </h3>
          <p className="mb-6 text-gray-700">
            Start saving your flashcards and notes today. Experience deep learning with FlashMind.
          </p>
          <a
            href="/anki"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Go to My Notes
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnkiAbout;
