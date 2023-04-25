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
    event.preventDefault();
    const newTodo: TodoInterface = { id: Date.now(), text: todo, completed: false };
    addTodo(newTodo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nova tarefa:
        <input type="text" value={todo} onChange={handleChange} />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}