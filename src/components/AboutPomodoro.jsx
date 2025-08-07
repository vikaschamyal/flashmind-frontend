const AboutPomodoro = () => (
  <section className="max-w-5xl mx-auto bg-indigo-100 border border-indigo-200 rounded-xl p-6 mb-10 shadow-sm">
    <h2 className="text-2xl font-bold text-indigo-700 mb-3">
      📖 What is Pomodoro Technique?
    </h2>
    <p className="text-gray-700 text-base mb-3 leading-relaxed">
      The{" "}
      <span className="font-semibold text-indigo-600">Pomodoro Technique</span>{" "}
      is a popular time management method that helps improve focus and
      productivity. It involves breaking your work into short intervals (usually
      25 minutes), called <em>Pomodoros</em>, followed by a short 5-minute
      break. After 4 Pomodoros, take a longer 15–30 minute break.
    </p>
    <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
      <li>
        <strong>🧠 Focus:</strong> 25-minute deep work sessions
      </li>
      <li>
        <strong>🌿 Rest:</strong> 5-minute short breaks to recharge
      </li>
      <li>
        <strong>🔄 Cycle:</strong> 4 Pomodoros → Long break
      </li>
    </ul>
    <p className="mt-3 text-sm text-gray-500 italic">
      Use this method daily to train your brain to work in focused sprints
      without mental fatigue. It’s simple, effective, and scientifically backed.
    </p>
  </section>
);

export default AboutPomodoro;
