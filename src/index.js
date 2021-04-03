import { useState } from "react";
import ReactDOM from "react-dom";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInput = { id: todos.length + 1, name: input };
    setTodos((prev) => [...prev, newInput]);
    setInput("");
  };

  const handleDelete = (todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={handleChange}
          placeholder="Enter Todo"
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}
          <button onClick={() => handleDelete(todo)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
