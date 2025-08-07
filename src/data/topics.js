// src/data/topics.js

export const fetchTopics = async () => {
    // You can later fetch this from a backend or external API
    return [
      {
        id: 1,
        title: "React.js Basics",
        questions: [
          "What is JSX?",
          "Explain the useState hook.",
          "What are props in React?",
          "What is a component?",
          "Difference between functional and class components?"
        ],
      },
      {
        id: 2,
        title: "Advanced React",
        questions: [
          "What is useContext and when to use it?",
          "How does useEffect work?",
          "Explain useRef and useMemo.",
          "How to implement lazy loading in React?",
          "What is React Suspense?"
        ],
      },
      {
        id: 3,
        title: "JavaScript Essentials",
        questions: [
          "Explain closures with example.",
          "Difference between var, let, and const?",
          "What is the event loop?",
          "Explain async/await.",
          "What is hoisting?"
        ],
      },
      {
        id: 4,
        title: "Frontend Performance",
        questions: [
          "How to optimize React app performance?",
          "What is code splitting?",
          "What is tree shaking?",
          "Difference between debounce and throttle?",
          "What are memory leaks and how to avoid them?"
        ],
      },
      {
        id: 5,
        title: "CSS and Tailwind",
        questions: [
          "What is Tailwind CSS?",
          "How does flexbox work?",
          "Difference between rem and em?",
          "How to create a responsive layout?",
          "What is the use of z-index?"
        ],
      }
    ];
  };
  