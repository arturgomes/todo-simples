import TodoItem from "../TodoItem";

export default function TodoList(props: any) {
  const { todos, deleteTodo, markDone, editarTarefa } = props;

  return (
    <ul className="mt-8 flex flex-col gap-3">
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} markDone={markDone} editarTarefa={editarTarefa} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}