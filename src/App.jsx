import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
   // maybe add note
import AnkiPage from "./pages/AnkiPage";   // show all notes
import ProtectedRoute from "./components/ProtectedRoute";
import AnkiAbout from "./pages/AnkiAbout";
import LearningPage from "./pages/LearningPage";
import TopicDetailPage from "./pages/TopicDetailPage";
import AboutPage from "./pages/Aboutpage";
import StudyReminder from "./components/StudyReminder";

import PenCursor from "./components/PenCursor";

const App = () => {
  return (
    <>
    
      <Navbar />
      <PenCursor />
      <Routes>
        <Route path="/" element={<AnkiAbout/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />

      
        <Route element={<ProtectedRoute />}>
          <Route path="/anki" element={<AnkiPage />} />
          <Route path="/study-reminder" element={<StudyReminder />} />
          
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/learning/:id" element={<TopicDetailPage />} />   
      </Route> 
      </Routes>
      </>
  );
};

export default App;