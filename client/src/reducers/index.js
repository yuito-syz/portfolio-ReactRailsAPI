import { combineReducers } from "redux";
import { reduxTokenAuthReducer as reduxTokenAuth } from "redux-token-auth";
import { reducer as notifications } from "react-notification-system-redux";

import register from "./register";
import session from "./session";

export default combineReducers({
  reduxTokenAuth,
  notifications,
  register,
  session
});
