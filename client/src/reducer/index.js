import { combineReducers } from "redux";
import TodoList from "./todo_reducer";
import Movies from "./movies_reducer";

const rootReducer = combineReducers({
  TodoList,
  Movies
});

export default rootReducer;
