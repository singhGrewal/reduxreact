import { combineReducers } from "redux";
import TodoList from "./todo_reducer";
import Movies from "./movies_reducer";
import auth from "./auth_reducer";

const rootReducer = combineReducers({
  // TodoList,
  // Movies
  auth
});

export default rootReducer;
