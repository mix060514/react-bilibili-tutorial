import { useState } from "react"
import "./styles.css"
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";


export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {}, [])

  function addTodos(title) {
    setTodos((current) => [...current, { id: crypto.randomUUID(), title, completed: false }]);
  }
    function toggleTodo(id, completed) {
      setTodos(current => {
      return current.map(todo => {
          if (todo.id === id) return {...todo, completed};

          return todo; 
      });
      });
    }
    function deleteTodo(id) {
      setTodos(current => current.filter(todo => todo.id !== id));
    }


  return (
    <>
      <NewTodoForm addTodos={addTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

    </>
  )
}
