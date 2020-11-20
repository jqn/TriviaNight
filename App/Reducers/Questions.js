import { RESET_QUESTIONS, SET_QUESTIONS } from "../Actions/Questions";

const initialState = {
  questions: [],
  askedQuestions: [],
};

export const questionData = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, questions: action.questionList };
    case RESET_QUESTIONS:
      return initialState;
    default:
      return state;
  }
};
