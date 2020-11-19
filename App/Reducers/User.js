import { $CombinedState } from "redux";
import { SET_ANSWER, RESET_USER_DATA } from "../Actions/User";
const initialState = {
  totalAnswered: 0,
  correctAnswered: 0,
  answers: [],
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return { ...state, answers: [...state.answers, action.answer] };
    case RESET_USER_DATA:
      return initialState;
    default:
      return state;
  }
};
