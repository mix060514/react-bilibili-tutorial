import { useState } from "react"

export default function TodoItem({ id, title, completed }) {
    return (
    <>          
      <li>
          <label>
              <input type="checkbox" checked={completed} onChange={(e)=>toggleTodo(id, e.target.checked)} /> {title}
          </label>
          <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
      </li>
    </>
  )

}
