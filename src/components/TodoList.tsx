"use client";

interface Todo {
  id: number;
  title: string;
  description: string;
}

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
};

export default function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <div className="mt-6 max-w-lg mx-auto">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 bg-white rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{todo.title}</h3>
              <p className="text-sm">{todo.description}</p>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
