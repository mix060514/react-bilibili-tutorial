import { useState } from "react"

export default function TodoList({ todos }) {
    
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
      <h1 className="header">Todo List</h1>
      
      {todos.length === 0 && <div>No todos</div>}

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={(e)=>toggleTodo(todo.id, e.target.checked)} /> {todo.title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
