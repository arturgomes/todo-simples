import TodoItem from "../TodoItem";

export default function TodoList(props: any) {
  const { todos, deleteTodo } = props;

  return (
    <div className="flex mt-7">

      <ul className="flex flex-col justify-between gap-6">
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}