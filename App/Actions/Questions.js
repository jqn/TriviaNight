export const START_PLAY = "START_PLAY";
export const RESTART_PLAY = "RESTART_PLAY";
export const COMPLETE_PLAY = "COMPLETE_PLAY";
export const ADD_PLAY_QUESTIONS = "ADD_PLAY_QUESTIONS";

export const startPlay = (active) => ({
  type: START_PLAY,
  active,
});

export const addPlayQuestions = (questionList) => ({
  type: ADD_PLAY_QUESTIONS,
  questionList,
});
