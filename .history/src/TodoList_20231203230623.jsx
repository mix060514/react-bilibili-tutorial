import { useState } from "react"
import TodoItem from "./TodoItem";

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
          <TodoItem {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  )
}
