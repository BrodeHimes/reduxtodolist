import React from "react";
import { createStore } from "redux";
import { Provider , useSelector, useDispatch } from "react-redux";

import { todoList, completedList , deleteItem , undoItem , clearAll} from "./actions.js";
//import { v4 as uuid } from "uuid";
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


  // const completeTodo = (id) => {
  //   const completed = todos.find((todo) => todo.id === id);
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  //   setCompletedTodos([...completedTodos, completed]);
  // };
  



   // const todo = {
    //   id: uuid(),
    //   text: inputText
    // };
    // instead of that we have this below that should get all that info
    // const todo = {
    //   id: uuid(),
    //   text: useSelector((state) => state.text)
    // };

  

  // const deleteTodo = (id) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };

  // const completeTodo = (id) => {
  //   const completed = todos.find((todo) => todo.id === id);
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  //   setCompletedTodos([...completedTodos, completed]);
  // };

  // const undoTodo = (id) => {
  //   const undo = completedTodos.find((todo) => todo.id === id);
  //   const newTodos = completedTodos.filter((todo) => todo.id !== id);
  //   setCompletedTodos(newTodos);
  //   setTodos([...todos, undo]);
  // };

  // const clearAll = () => {
  //   setTodos([]);
  //   setCompletedTodos([]);
  // };

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

        <button onClick={()=> dispatch(clearAll())}>Clear All</button>

        <section>
          <h2>Current Things To Do!</h2>
          <ul className="todoContainer">            
          {todos.map((todo) => (
              <section className="todo">
               <li>{todo.text}</li>
                <div>
                  <button onClick={() => dispatch(deleteItem(todo))}>Delete</button>
                  <button onClick={() => dispatch(completedList(todo))}>Complete</button>
                </div>
              </section>
          ))
          }
          </ul>
          <section>
          <h2>Things We've Completed!!!</h2>
          <ul className="todoContainer">
            {completedTodos.map((todo) => (
              <section className="todo completed">
                {todo.text}
                <button onClick={()=>dispatch(undoItem(todo))}>Undo</button>
              </section>
            ))}
          </ul>
        </section>
        </section>
    </div>
  );
}

// function TodoItem() {
//    return <li>{todo}</li>;
// }

