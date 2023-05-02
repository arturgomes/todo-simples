export default function TodoItem(props: any) {
  const { todo, deleteTodo } = props;

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="flex flex-row gap-24 border-gray-400 bg-gray-500 border rounded p-2">
      <span className="flex-1">
        {todo.text}
      </span>
      <button onClick={handleDelete} className="rounded border border-purple-400 bg-purple-700 px-2 py-1 w-10 h-10">X</button>
    </li>
  );
}
