import { useState } from "react";
import { TodoInterface } from "../../App";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";


export default function TodoApp() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const addTodo = (newTodo: TodoInterface) => {
    // TODO: Implementar a função de adicionar nova tarefa à lista
  }

  const deleteTodo = (todoId: TodoInterface) => {
    // TODO: Implementar a função de deletar tarefa da lista
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}