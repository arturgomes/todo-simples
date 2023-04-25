import { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}
export default function TodoForm({ addTodo }: TodoFormProps) {
  const [todo, setTodo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(todo);
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