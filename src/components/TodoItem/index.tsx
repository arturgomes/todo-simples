export default function TodoItem(props: any) {
  const { todo, deleteTodo } = props;

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      {todo.text} <button onClick={handleDelete}>X</button>
    </li>
  );
}
