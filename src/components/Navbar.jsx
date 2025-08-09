import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const MenuLinks = () => (
    <>
      <Link to="/quizzes" className="nav-link">Quiz</Link>
      <Link to="/anki" className="nav-link">Anki</Link>
      <Link to="/learning" className="nav-link">Learning</Link>
      <Link to="/study-reminder" className="nav-link">Reminder</Link>
      <Link to="/about" className="nav-link">About</Link>

      {user ? (
        <>
          <span className="text-sm text-gray-300 bg-[#1a1a1a] px-3 py-1 rounded-md font-medium neon-text-glow">
            <strong>Welcome -</strong> {user.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-red-500 via-pink-500 to-red-600 rounded-md shadow-lg hover:scale-105 transition duration-300"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-md shadow-md hover:scale-105 transition duration-300"
          >
            Register
          </Link>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-[#0e0e0e] px-6 py-4 border-b border-[#1a1a1a] shadow-md shadow-cyan-500/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold tracking-wide text-cyan-400 hover:text-cyan-300 transition duration-300">
          ⚡ FlashMind
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <MenuLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-cyan-400 focus:outline-none text-3xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <MenuLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
