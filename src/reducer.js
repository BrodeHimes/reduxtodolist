const initialState = { 
    todos:[],
    completed:[]
  };
  
 const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "TODOLIST":
        return {
            ...state,
          todos: [...state.todos, {id: action.id, text: action.text}]
        };
      case "COMPLETED":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.id),
          completed:[...state.completed, {id: action.id, text: action.text}]
        };    
      case "DELETE":
         return{
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.id),
         };
      case "UNDO":
         return{
          ...state,
          todos: [...state.todos, {id: action.id, text: action.text}],
          completed: state.completed.filter((todo) => todo.id !== action.id)
         };
      case "CLEARALL":
        return{
          todos: [],
          completed: [],
        };
        default:
        return state;
    }
      
  };
export default reducer;
