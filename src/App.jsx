import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AnkiPage from "./pages/AnkiPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AnkiAbout from "./pages/AnkiAbout";
import LearningPage from "./pages/LearningPage";
import TopicDetailPage from "./pages/TopicDetailPage";
import AboutPage from "./pages/AboutPage";
import StudyReminder from "./components/StudyReminder";
import Footer from "./components/Footer";
import Docs from "./pages/Docs";
import FloatingNavbar from "./components/FloatingNavbar";

// Quiz pages
import QuizListPage from "./pages/QuizListPage";
import QuizPlayPage from "./pages/QuizPlayPage";

import LeaderboardPage from "./pages/LeaderboardPage";

const App = () => {
  return (
    <>
      <Navbar />
      <FloatingNavbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AnkiAbout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/docs" element={<Docs />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/anki" element={<AnkiPage />} />
          <Route path="/study-reminder" element={<StudyReminder />} />

          {/* Quiz routes */}
          <Route path="/quizzes" element={<QuizListPage />} />
          <Route path="/quiz/:id" element={<QuizPlayPage />} />
          <Route path="/quiz/:id/leaderboard" element={<LeaderboardPage />} />

          {/* Learning */}
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/learning/:id" element={<TopicDetailPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
