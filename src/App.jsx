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
import AboutPage from "./pages/AboutPage";
import StudyReminder from "./components/StudyReminder";
import Footer from "./components/Footer";
import Docs from "./pages/Docs";
import FloatingNavbar from "./components/FloatingNavbar";



const App = () => {
  return (
    <>
    
      <Navbar />
      <FloatingNavbar />
     
      <Routes>
        <Route path="/" element={<AnkiAbout/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/docs" element={<Docs />} />

      
        <Route element={<ProtectedRoute />}>
          <Route path="/anki" element={<AnkiPage />} />
          <Route path="/study-reminder" element={<StudyReminder />} />
          
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/learning/:id" element={<TopicDetailPage />} />   
      </Route>
      </Routes>
      <Footer /> 
      </>
  );
};

export default App;