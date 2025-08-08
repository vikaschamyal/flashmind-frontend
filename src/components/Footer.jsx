import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-green-400 mb-2">FlashMind</h1>
          <p className="text-sm text-gray-400">
            Sharpen your brain with notes, flashcards, and focused study tools. Built for learners, by learners.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/anki" className="hover:underline text-gray-300">Anki Notes</Link></li>
            <li><Link to="/learning" className="hover:underline text-gray-300">Learning Notes</Link></li>
            <li><Link to="/study-reminder" className="hover:underline text-gray-300">Study Timer</Link></li>
            <li><Link to="/about" className="hover:underline text-gray-300">About</Link></li>
            <li><Link to="/docs" className="hover:underline text-gray-300">Docs</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support & Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="mailto:vikaschamyal@gmail.com" className="hover:underline">vikaschamyal@gmail.com</a></li>
            <li>Need help? <Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li>Join our <a href="https://github.com/vikaschamyal" target="_blank" className="hover:underline">Dev Team</a></li>
          </ul>
        </div>

        {/* Creator Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Creator</h3>
          <p className="text-sm text-gray-400 mb-2">
            Built by <span className="text-green-400 font-medium">Vikas Chamyal</span>
          </p>
          <div className="flex items-center gap-4 text-xl text-gray-300">
            <a href="https://github.com/vikaschamyal" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://portfolio-lac-six-83.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGlobe />
            </a>
            <a href="mailto:vikaschamyal@gmail.com" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FlashMind. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
