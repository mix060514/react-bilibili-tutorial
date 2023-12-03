import { useState } from "react"
import "./styles.css"


export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((current) => {
      return [...todos, { id: crypto.randomUUID(), title: newItem, completed: false }];
    });
  }
  function toggleTodo(id, completed) {
    setTodos(current => {
      return current.map(todo => {
        if (todo.id === id) return {...todo, completed}
        return todo; 
      });
    });
  }
  function deleteTodo(id) {
    setTodos(current => {
      return current.filter(todo => {return todo.id !== id;
      });
    });
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        </div>

        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={(e)=>toggleTodo(todo.id, e.target.checked)} /> {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
