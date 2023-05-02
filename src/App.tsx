
import './App.css'
import TodoApp from './components/TodoApp';

/**
 * Os campos da interface TodoInterface incluem:

id: um número inteiro que identifica exclusivamente a tarefa na lista.
text: uma string que contém o texto descritivo da tarefa.
completed: um booleano que indica se a tarefa foi concluída ou não.
 */
export interface TodoInterface {
  id: number;
  text: string;
  completed: boolean;
}

function App() {

  return (
    <TodoApp />
  );
}

export default App
