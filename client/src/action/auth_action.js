import { GET_ERRORS, SET_CURRENT_USER, TEST_DIS } from "./types";

export const registerUser = userData => {
  return {
    type: TEST_DIS,
    payload: userData
  };
};
