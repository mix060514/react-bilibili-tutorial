import "./styles.css"


export default function App() {
  return <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">item</label>
      <input type="text" id="item"/>
    </div>
  </form>
}
