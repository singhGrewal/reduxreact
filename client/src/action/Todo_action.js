export const ADD_TODO = "ADD_TODO";

export function createTodo(todoList) {
  console.log("todoList", todoList);
  const action = {
    type: ADD_TODO,
    todoList
  };
  return action;
}
