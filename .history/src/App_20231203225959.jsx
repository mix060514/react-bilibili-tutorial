import { useState } from "react"
import "./styles.css"
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";


export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(title) {
    setTodos((current) => [...current, { id: crypto.randomUUID(), title, completed: false }]);
  }


  return (
    <>
      <NewTodoForm addTodos={addTodos} />
      <TodoList todos={todos} />

    </>
  )
}
