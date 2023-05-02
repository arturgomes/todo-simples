export default function TodoItem(props: any) {
  const { todo, deleteTodo, markDone } = props;

  const handleDelete = () => {
    console.log("o id da tarefa eh ", todo.id)
    deleteTodo(todo.id);
  };
  const handleMark = () => {
    console.log("o id da tarefa eh ", todo.id)
    markDone(todo.id);
  };

  return (
    <li>
      {todo.text} <button onClick={handleDelete}>X</button><button onClick={handleMark}>{todo.completed ? "Cancele" : "Conclua"}</button>
    </li>
  );
}
