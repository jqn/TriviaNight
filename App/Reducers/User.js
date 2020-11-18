import { START_PLAY, ADD_PLAY_QUESTIONS } from "../Actions/Questions";

export const userData = (
  state = {
    playComplete: false,
    totalAnswered: 0,
    correctAnswered: 0,
    answers: {},
  },
  action
) => {
  switch (action.type) {
    case START_PLAY:
      return { ...state, active: action.active };
    case ADD_PLAY_QUESTIONS:
      console.log("action", action);
      return { ...state, questions: action.questionList };
    default:
      return state;
  }
};
