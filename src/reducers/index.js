import { combineReducers } from "redux";
import { user } from "./user";
import { Alert } from "./alert";

export default combineReducers({
  user,
  Alert,
});
