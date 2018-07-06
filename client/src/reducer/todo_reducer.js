import { ADD_TODO } from "../action/Todo_action";

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("Movie favoriteMovies", action);

      // let newState = state.concat(action.todoList);
      let newValue = action.todoList;
      console.log("newState", ...state);

      let TodoList = action.todoList;
      // return {
      //   ...state,
      //   TodoList: newValue
      // };
      return TodoList;

    default:
      return state;
  }
};
export default TodoReducer;
