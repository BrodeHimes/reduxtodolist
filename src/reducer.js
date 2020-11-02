/**
 * This is your reducer! Please add in your "action cases" and update your state appropriately.
 * Remember, never override your old state, only use it in calculating your new state.
 * Also remember to update your initialState with any defaults you want to include!
 */

const initialState = {
    todos: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "TODOLIST":
        return {
            ...state,
           todos: [...state.todos, action.text]
        };
      
      default:
        return state;
    }
  };
  
  export default reducer;

//   case "COMPLETEDLIST":
//         return {
//           ...state,
//           completedTodo: [action.text]
//         };