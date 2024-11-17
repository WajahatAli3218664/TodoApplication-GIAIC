"use client";

import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
}

type TodoFormProps = {
  addTodo: (todo: Todo) => void;
};

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return; // Validation check
    addTodo({
      id: Date.now(),
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mt-4 max-w-lg mx-auto"
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Your Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Task Details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-sky-400 transition-colors duration-200"
      >
        Add Todo
      </button>
    </form>
  );
}
