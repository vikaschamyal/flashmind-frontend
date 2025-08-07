import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const AnkiPage = () => {
  const [notes, setNotes] = useState([]);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [editId, setEditId] = useState(null);

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/anki", getAuthHeader());
      setNotes(res.data);
    } catch (error) {
      console.error("Failed to fetch notes:", error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!front || !back) return alert("Please fill both front and back");

    try {
      if (editId) {
        await axios.put(`http://localhost:8000/api/anki/${editId}`, { front, back }, getAuthHeader());
        setEditId(null);
      } else {
        await axios.post("http://localhost:8000/api/anki", { front, back }, getAuthHeader());
      }

      setFront("");
      setBack("");
      fetchNotes();
    } catch (error) {
      console.error("Error saving note:", error.response?.data?.message || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/anki/${id}`, getAuthHeader());
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Error deleting note");
    }
  };
  
  const handleEdit = (note) => {
    setEditId(note._id);
    setFront(note.front);
    setBack(note.back);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-gray-800 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">🧠 FlashMind - Anki Notes</h2>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-10"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Front (Question)</label>
              <input
                type="text"
                placeholder="e.g. What is React?"
                value={front}
                onChange={(e) => setFront(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">Back (Answer)</label>
              <input
                type="text"
                placeholder="e.g. A JavaScript library for UI"
                value={back}
                onChange={(e) => setBack(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            {editId ? "Update Note" : "Add Note"}
          </button>
        </form>

        {/* Notes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white border border-gray-200 rounded-lg shadow p-5 flex flex-col justify-between"
            >
              <div>
                <p className="font-semibold text-blue-700 mb-2">Q: {note.front}</p>
                <p className="text-gray-700">A: {note.back}</p>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => handleEdit(note)}
                  className="text-yellow-600 hover:text-yellow-500 flex items-center gap-1 text-sm"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="text-red-600 hover:text-red-500 flex items-center gap-1 text-sm"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnkiPage;
