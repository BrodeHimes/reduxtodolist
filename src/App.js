import React from "react";
import { createStore } from "redux";
import { Provider , useSelector, useDispatch } from "react-redux";
import { todoList, completedList , deleteItem , undoItem , clearAll} from "./actions.js";
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
  const [inputText, setInputText] = React.useState("");
  const dispatch = useDispatch();
    
  const handleChange = (e) => {
    setInputText(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoList(inputText));
    setInputText("");
    debugger;
  };

  const todos = useSelector(state=>state.todos);
  const completedTodos = useSelector(state=>state.completed);
 

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
        <button onClick={()=> dispatch(clearAll())}>Clear All</button>
      )}
      {!!todos.length && (
        <section>
          <h2>Current Things To Do!</h2>
          <ul className="todoContainer">            
          {todos.map((todo) => (
              <TodoItem className="todo">
               {todo.text}
                <div>
                  <button onClick={() => dispatch(deleteItem(todo))}>Delete</button>
                  <button onClick={() => dispatch(completedList(todo))}>Complete</button>
                </div>
              </TodoItem>
                )
              )
            }
          </ul>
        </section>
        )
      }
      {!!completedTodos.length && (
        <section>
          <h2>Things We've Completed!!!</h2>
          <ul className="todoContainer">
            {completedTodos.map((todo) => (
              <TodoItem className="todo completed">
                {todo.text}
                <button onClick={()=>dispatch(undoItem(todo))}>Undo</button>
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