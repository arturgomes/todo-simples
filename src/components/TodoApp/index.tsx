import { useState } from "react";
import { TodoInterface } from "../../App";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";


export default function TodoApp() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const addTodo = (newTodo: TodoInterface) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}