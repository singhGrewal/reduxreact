import { ADD_TODO } from "../action/Todo_action";

const MovieReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      console.log("Movie favoriteMovies", action);

      let newState = state.concat(action.todoList);
      console.log("newState", newState);
      return newState;

    default:
      return state;
  }
};
export default MovieReducer;
