import { useState, useEffect } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  });
  const [input, setInput] = useState('');

  // ✅ Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Add Task
  const Add_Task = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput('');
  };

  // ✅ Delete Task
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // ✅ Toggle Complete
  const handleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-12 items-center justify-center">
      <h2 className="text-4xl capitalize font-bold">React simple to do list app</h2>

      <div className="flex gap-4">
        <input
          type="text"
          className="p-5 outline-none text-2xl rounded-lg border-2 border-gray-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task"
        />
        <button
          onClick={Add_Task}
          className="p-4 cursor-pointer bg-red-500 text-white font-bold capitalize rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="flex flex-col items-center gap-4 w-full max-w-md px-4">
        {tasks.map((task) => (
          <Task
            key={task.id}
            text={task.text}
            completed={task.completed}
            handleDelete={() => handleDelete(task.id)}
            handleComplete={() => handleComplete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
