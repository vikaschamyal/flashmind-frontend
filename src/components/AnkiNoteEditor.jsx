import React, { useState, useEffect } from "react";

const AnkiNoteEditor = ({ onNoteCreated, editNote, clearEdit }) => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (editNote) {
      setFront(editNote.front);
      setBack(editNote.back);
    }
  }, [editNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!front || !back) {
      setError("Both front and back are required.");
      return;
    }

    const method = editNote ? "PUT" : "POST";
    const url = editNote
      ? `http://localhost:8000/api/anki/${editNote._id}`
      : `http://localhost:8000/api/anki`;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ front, back }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess(true);
      setFront("");
      setBack("");
      onNoteCreated();
      if (clearEdit) clearEdit();

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 backdrop-blur-md shadow-xl rounded-xl p-8 max-w-2xl mx-auto mt-10 text-white transition duration-300"
    >
      <h2 className="text-2xl font-bold mb-6 text-teal-400 tracking-wide">
        {editNote ? "Edit Note" : "Create New Flashcard"}
      </h2>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-semibold text-teal-300">Front Side</label>
        <textarea
          rows={3}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          placeholder="Question or Term"
          value={front}
          onChange={(e) => setFront(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-semibold text-teal-300">Back Side</label>
        <textarea
          rows={3}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          placeholder="Answer or Description"
          value={back}
          onChange={(e) => setBack(e.target.value)}
        />
      </div>

      {error && <p className="text-red-400 mb-3">{error}</p>}
      {success && <p className="text-green-400 mb-3">Saved successfully!</p>}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-semibold tracking-wide transition-all duration-200 shadow-md"
        >
          {editNote ? "Update Note" : "Save Note"}
        </button>

        {editNote && (
          <button
            type="button"
            onClick={() => {
              setFront("");
              setBack("");
              clearEdit();
            }}
            className="text-sm text-gray-400 hover:text-white underline transition"
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
};

export default AnkiNoteEditor;
