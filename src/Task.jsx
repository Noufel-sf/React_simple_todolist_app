import React from 'react'

function Task({ text, completed, handleDelete, handleComplete }) {
  return (
    <li
      className={`w-full flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-md ${
        completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <span className="text-xl">{text}</span>
      <div className="flex gap-3">
        <button onClick={handleComplete} className="text-green-600 text-xl font-bold">
          ✓
        </button>
        <button onClick={handleDelete} className="text-red-600 text-xl font-bold">
          ✗
        </button>
      </div>
    </li>
  );
}

export default Task