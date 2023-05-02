import { useEffect, useState } from "react";

export default function TodoItem(props: any) {
  const { todo, deleteTodo, markDone, editarTarefa } = props;
  const [editar, setEditar] = useState(false);
  const [novoValor, setNovoValor] = useState('')

  const handleDelete = () => {
    console.log("o id da tarefa eh ", todo.id)
    deleteTodo(todo.id);
  };
  const handleMark = () => {
    console.log("o id da tarefa eh ", todo.id)
    markDone(todo.id);
  };
  const handleEditar = () => {
    setEditar(editar => !editar)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setTodo(event.target.value);
    setNovoValor(event.target.value)
    editarTarefa(todo.id, event.target.value)
  };
  return (
    <li>
      <div>

        {todo.text} <button onClick={handleEditar}>{editar ? "Fechar" : "Editar"}</button><button onClick={handleDelete}>X</button><button onClick={handleMark}>{todo.completed ? "Cancele" : "Conclua"}</button>
      </div>
      {editar &&
        (
          <div>
            <input type="text" value={novoValor} onChange={handleChange} />
          </div>
        )}
    </li>
  );
}
