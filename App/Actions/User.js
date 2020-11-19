export const SET_ANSWER = "SET_ANSWER";
export const RESET_USER_DATA = "RESET_USER_DATA";
export const SET_TOTAL_ANSWERED = "SET_TOTAL_ANSWERED";
export const SET_CORRECT_ANSWERED = "SET_CORRECT_ANSWERED";

export const setAnswer = (answer) => ({
  type: SET_ANSWER,
  answer,
});

export const resetUserData = () => ({
  type: RESET_USER_DATA,
});
