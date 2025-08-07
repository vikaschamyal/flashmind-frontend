import React, { useState, useEffect, useRef } from "react";
import AboutPomodoro from "./AboutPomodoro";

const StudyReminder = () => {
  const [topic, setTopic] = useState("");
  const [topicsList, setTopicsList] = useState(
    JSON.parse(localStorage.getItem("topicsList")) || []
  );

  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 min
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const timerRef = useRef(null);

  // 🕒 Timer Logic
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setIsBreak((prevBreak) => {
              const next = !prevBreak;
              setTimeLeft(next ? 5 * 60 : 25 * 60);
              return next;
            });
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem("topicsList", JSON.stringify(topicsList));
  }, [topicsList]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
    setIsRunning(false);
  };

  const handleAddTopic = () => {
    if (topic.trim()) {
      setTopicsList([...topicsList, topic]);
      setTopic("");
    }
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTodoList([...todoList, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskComplete = (index) => {
    const updated = [...todoList];
    updated[index].completed = !updated[index].completed;
    setTodoList(updated);
  };

  const deleteTask = (index) => {
    const updated = [...todoList];
    updated.splice(index, 1);
    setTodoList(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 to-white p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
         FlashMind Focus Dashboard
      </h1>
      <AboutPomodoro/>

      {/* Timer */}
      <section className="bg-white rounded-xl shadow-md p-6 max-w-5xl mx-auto mb-10 border border-indigo-200">
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            {isBreak ? "🌿 Break Time" : "🚀 Focus Time"}
          </p>
          <h2 className="text-6xl font-extrabold text-indigo-700 my-4">
            {formatTime(timeLeft)}
          </h2>
          <div className="space-x-4">
            <button
              onClick={toggleTimer}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium"
            >
              {isRunning ? "Pause" : "Start"}
            </button>
            <button
              onClick={resetTimer}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Topics */}
        <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">
            📚 Topics to Cover
          </h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="New topic..."
              className="flex-grow border border-gray-300 px-4 py-2 rounded-md shadow-sm"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <button
              onClick={handleAddTopic}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {topicsList.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        {/* Todo List */}
        <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">✅ Todo List</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="New task..."
              className="flex-grow border border-gray-300 px-4 py-2 rounded-md shadow-sm"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              onClick={handleAddTask}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {todoList.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-between p-2 border rounded-md ${
                  item.completed ? "bg-green-50 line-through text-gray-500" : "bg-white"
                }`}
              >
                <span
                  onClick={() => toggleTaskComplete(index)}
                  className="cursor-pointer"
                >
                  {item.text}
                </span>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
        
      </div>
    </div>
  );
};

export default StudyReminder;
