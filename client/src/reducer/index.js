import { combineReducers } from "redux";
// import TodoList from "./todo_reducer";
// import Movies from "./movies_reducer";
import auth from "./auth_reducer";
import errors from "./error_reducer";

const rootReducer = combineReducers({
  // TodoList,
  // Movies
  auth,
  errors
});

export default rootReducer;
