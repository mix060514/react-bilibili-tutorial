export default function NewTodoForm() {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((current) => {
      return [...todos, { id: crypto.randomUUID(), title: newItem, completed: false }];
    });
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      </div>

      <button className="btn">Add</button>
    </form>
  )
}
