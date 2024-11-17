"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

interface Todo {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]); // Task list maintained with useState

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]); // Adding a new task
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Deleting task by ID
  };

  return (
    <div className="bg-gradient-to-r from-grey-200 via-grey-200 to-grey-200 min-h-screen">
      <Navbar />
      <main className="container mx-auto py-8">
        {/* Passing props */}
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-slate-600 text-center py-4 mt-auto">
        <p className="text-sm">
          A Todo app assignment created by Wajahat Ali, part of the GIAIC curriculum.
        </p>
      </footer>
    </div>
  );
}
