import { combineReducers } from "redux";

import { questionData } from "./Questions";
import { userData } from "./User";

export default combineReducers({
  questionData,
  userData,
});
