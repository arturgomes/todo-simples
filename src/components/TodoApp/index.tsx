import { useState } from "react";
import { TodoInterface } from "../../App";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";


export default function TodoApp() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const addTodo = (newTodo: TodoInterface) => {
    setTodos(todos => [newTodo, ...todos])
  }

  const deleteTodo = (todoId: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId))
    // TODO: Implementar a função de deletar tarefa da lista
  }
  const markDone = (todoId: number) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === todoId) {
        console.log("tarefa", todo)
        return { ...todo, completed: !todo.completed }
      }
      return todo
    }))
  }
  const editarTarefa = (todoId: number, novoText: string) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, text: novoText }
      }
      return todo
    }))
  }
  console.log(todos)
  return (
    <div className="mt-8 p-8 min-h-10 bg-gray-800 border-2 rounded-lg">
      <h1 className="text-gray-200 text-xl mb-3">Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} markDone={markDone} editarTarefa={editarTarefa} />
    </div>
  );
}