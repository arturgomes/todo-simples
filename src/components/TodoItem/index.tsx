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
    <li className="border rounded bg-gray-700 p-2">
      <div className="flex flex-row space-between gap-6">
        {todo.completed ? (<span className="text-gray-200 line-through">{todo.text}</span>) : (<span className="text-gray-200">{todo.text}</span>)}
        <div>
          <button className="bg-gray-600 text-gray-200 p-1 rounded-l border hover:bg-gray-800 " onClick={handleEditar}>{editar ? "Fechar" : "Editar"}</button>
          <button className="bg-gray-600 text-gray-200 p-1 border hover:bg-gray-800" onClick={handleDelete}>X</button>
          <button className="bg-gray-600 text-gray-200 p-1 rounded-r border hover:bg-gray-800" onClick={handleMark}>{todo.completed ? "Cancele" : "Conclua"}</button>
        </div>
      </div>
      {editar &&
        (
          <div className="mt-2">
            <span className="text-gray-300">Tarefa editada:</span>

            <input type="text" value={novoValor} onChange={handleChange} />
          </div>
        )}
    </li>
  );
}
