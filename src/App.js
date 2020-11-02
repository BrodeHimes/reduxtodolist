import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { v4 as uuid } from "uuid";

import reducer from "./reducer";
import "./styles.css";
 

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

function Main() {
  const [todos, setTodos] = React.useState([]);
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [inputText, setInputText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      text: inputText
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.currentTarget.value);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const completed = todos.find((todo) => todo.id === id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completed]);
  };

  const undoTodo = (id) => {
    const undo = completedTodos.find((todo) => todo.id === id);
    const newTodos = completedTodos.filter((todo) => todo.id !== id);
    setCompletedTodos(newTodos);
    setTodos([...todos, undo]);
  };

  const clearAll = () => {
    setTodos([]);
    setCompletedTodos([]);
  };

  return (
    <div className="App">
      <h1>Cohort TODO App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Please enter an item to do!</label>
        <input
          id="todoInput"
          type="text"
          value={inputText}
          onChange={handleChange}
        />
        <button>Do It!!</button>
      </form>
      {(!!todos.length || !!completedTodos.length) && (
        <button onClick={clearAll}>Clear All</button>
      )}
      {!!todos.length && (
        <section>
          <h2>Current Things To Do!</h2>
          <ul className="todoContainer">
            {todos.map((todo) => (
              <TodoItem className="todo">
                {todo.text}
                <div>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  <button onClick={() => completeTodo(todo.id)}>
                    Complete
                  </button>
                </div>
              </TodoItem>
            ))}
          </ul>
        </section>
      )}
      {!!completedTodos.length && (
        <section>
          <h2>Things We've Completed!!!</h2>
          <ul className="todoContainer">
            {completedTodos.map((todo) => (
              <TodoItem className="todo completed">
                {todo.text}
                <button onClick={() => undoTodo(todo.id)}>Undo</button>
              </TodoItem>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function TodoItem(props) {
  return <li className={props.className}>{props.children}</li>;
}

