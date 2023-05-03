import { useState } from "react";
import { TodoInterface } from "../../App";

interface TodoFormProps {
  addTodo: (todo: TodoInterface) => void;
}
export default function TodoForm({ addTodo }: TodoFormProps) {
  const [todo, setTodo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita que a tela atualize (de refresh)
    const newTodo: TodoInterface = { id: Date.now(), text: todo, completed: false };
    addTodo(newTodo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-row gap-3 items-center">

        <label className="text-gray-200">
          Nova tarefa:
        </label>
        <input className="bg-gray-600 border rounded border-gray-400 p-1 text-gray-300" type="text" value={todo} onChange={handleChange} />
      </div>
      <button className="bg-purple-600 border-2 rounded py-1 text-gray-200" type="submit">Adicionar</button>
    </form>
  );
}