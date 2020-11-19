export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_QUESTION_TIME = "SET_QUESTION_TIME";
export const SET_ASKED_QUESTIONS = "SET_ASKED_QUESTIONS";
export const RESET_QUESTIONS = "RESET_QUESTIONS";

export const setQuestions = (questionList) => ({
  type: SET_QUESTIONS,
  questionList,
});

export const resetQuestions = (questionList) => ({
  type: RESET_QUESTIONS,
  questionList,
});
