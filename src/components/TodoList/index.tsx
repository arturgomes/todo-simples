import TodoItem from "../TodoItem";

export default function TodoList(props: any) {
  const { todos, deleteTodo } = props;

  return (
    <ul>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}