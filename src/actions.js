/**
 * Write your action creators here!
 * Remember, an action creator is just a function that returns an action
 * An action is just a JavaScript object with a "type" field, and whatever else you want to include
 * Don't forget to `export` your actions!
 *
 * Example:
 * export function incrementCounter(incrementBy) {
 *  return {
 *    type: "INCREMENT",
 *    incrementBy
 *  }
 * }
 */

// import { v4 as uuid } from "uuid";
export const todoList = (todo) => ({
    type: "TODOLIST",
    id:1,
    text: todo
  });
  
