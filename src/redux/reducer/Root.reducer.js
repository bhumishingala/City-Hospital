import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";

 

export const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer
})