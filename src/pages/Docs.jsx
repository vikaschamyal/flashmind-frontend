import React from "react";
import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          📘 FlashMind Documentation
        </h1>

        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Welcome to FlashMind</h2>
          <p className="text-gray-700 text-lg">
            FlashMind is a full-featured learning app designed to help you remember better, focus longer, and learn smarter.
            Whether you’re a student, professional, or lifelong learner — FlashMind has tools to support your growth.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🧠 Core Features</h2>

          <div className="space-y-6">
            {/* Anki Notes */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">1. Anki Notes</h3>
              <p>
                Add and manage question-answer style flashcards for active recall.
                Useful for learning definitions, coding concepts, interview prep, etc.
              </p>
              <Link to="/anki" className="text-blue-500 underline mt-1 inline-block">Go to Anki Notes →</Link>
            </div>

            {/* Learning Notes */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">2. Learning Notes</h3>
              <p>
                A place to organize structured notes by topics, categories, and subtopics.
                Ideal for frontend, backend, DSA, or full-stack prep.
              </p>
              <Link to="/learning" className="text-blue-500 underline mt-1 inline-block">Go to Learning Notes →</Link>
            </div>

            {/* Study Timer */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">3. Pomodoro Timer</h3>
              <p>
                Use the Pomodoro-style Study Reminder to stay focused and track your study blocks.
                Designed for deep work and consistency.
              </p>
              <Link to="/study-reminder" className="text-blue-500 underline mt-1 inline-block">Go to Study Timer →</Link>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🚀 Getting Started</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Create an account or login with your existing credentials.</li>
            <li>Use the navbar to switch between Anki, Learning, or Pomodoro tools.</li>
            <li>Add your notes and they will be saved securely with JWT-based authentication.</li>
            <li>Edit or delete notes anytime.</li>
            <li>Your progress and data is private and stored securely.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Q: Are my notes private?</h4>
              <p>A: Yes, all your notes are tied to your account and securely stored.</p>
            </div>
            <div>
              <h4 className="font-semibold">Q: Can I access FlashMind on mobile?</h4>
              <p>A: Yes, the app is fully responsive and works on all devices.</p>
            </div>
            <div>
              <h4 className="font-semibold">Q: Is it free?</h4>
              <p>A: Yes, FlashMind is completely free and built to help learners succeed.</p>
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">📬 Contact & Support</h2>
          <p>
            Have feedback or need help? Reach out to the creator directly:
          </p>
          <ul className="mt-2 space-y-1 text-blue-600">
            <li>Email: <a href="mailto:vikaschamyal@gmail.com" className="underline">vikaschamyal.webdev@gmail.com</a></li>
            <li>Portfolio: <a href="https://portfolio-lac-six-83.vercel.app" target="_blank" className="underline">vikaschamyal.netlify.app</a></li>
            <li>GitHub: <a href="https://github.com/vikaschamyal" target="_blank" className="underline">github.com/vikas-c</a></li>
          </ul>
        </section>

        {/* Back to App */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition"
          >
            ← Back to FlashMind
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Docs;
