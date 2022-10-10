import { combineReducers } from "redux";
import { cardsReducer } from "./card";
import { userReducer } from "./user-info";

export const rootReducer = combineReducers({
	cardsData: cardsReducer,
	userData: userReducer,
});