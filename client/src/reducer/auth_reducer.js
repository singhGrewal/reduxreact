import { GET_ERRORS, SET_CURRENT_USER, TEST_DIS } from "../action/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST_DIS":
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
export default AuthReducer;
