import { useState } from "react";
import { TodoInterface } from "../../App";

interface TodoFormProps {
  addTodo: (todo: TodoInterface) => void;
  styleForm: string
}
export default function TodoForm({ addTodo, styleForm }: TodoFormProps) {
  const [todo, setTodo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TodoInterface = { id: Date.now(), text: todo, completed: false };
    addTodo(newTodo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label>
        Nova tarefa:
      </label>
      <div className="flex flex-row gap-6">
        <input type="text" value={todo} onChange={handleChange} className="rounded bg-gray-700 border-gray-500 h-12 border w-full text-gray-200" />
        <button type="submit" className="border rounded  bg-purple-500 border-purple-400 align-middle h-12 px-4 ">Adicionar</button>
      </div>
    </form>
  );
}