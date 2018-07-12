import { SET_CURRENT_USER } from "../action/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log("login reducer");
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};
export default AuthReducer;
