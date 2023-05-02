import { useState } from "react";
import { TodoInterface } from "../../App";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";


export default function TodoApp() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const addTodo = (newTodo: TodoInterface) => {
    setTodos(todos => [...todos, newTodo])
    // TODO: Implementar a função de adicionar nova tarefa à lista
  }

  const deleteTodo = (todoId: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId))
    // TODO: Implementar a função de deletar tarefa da lista
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">

      <div className="flex flex-1 flex-col m-10 bg-gray-800 text-gray-200 min-w-36 min-h-96 p-6 border rounded-2xl border-gray-700 align-middle">
        <h1 className="text-xl pb-3">Lista de Tarefas</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}