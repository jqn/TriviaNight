import { $CombinedState } from "redux";
import {
  SET_ANSWER,
  RESET_USER_DATA,
  SET_CORRECT_ANSWERED,
} from "../Actions/User";

const initialState = {
  totalAnswered: 0,
  correctAnswered: 0,
  answers: [],
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return { ...state, answers: [...state.answers, action.answer] };
    case SET_CORRECT_ANSWERED:
      return { ...state, correctAnswered: state.correctAnswered + 1 };
    case RESET_USER_DATA:
      return initialState;
    default:
      return state;
  }
};
