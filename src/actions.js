 import { v4 as uuid } from "uuid";
export const todoList = (inputText) => ({
    type: "TODOLIST",
    id: uuid(),
    text: inputText
  });
  
export const completedList = (item) => ({
  type:"COMPLETED",
  id: item.id,
  text: item.text,
});

export const deleteItem = (item) => ({
  type:"DELETE",
  id: item.id,
  text: item.text,
});

export const undoItem = (item) => ({
  type:"UNDO",
  id: item.id,
  text: item.text,
});

export const clearAll = () => ({
  type:"CLEARALL",
});