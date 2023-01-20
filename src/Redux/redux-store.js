import {combineReducers, createStore} from "redux";
import {authReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
})


export const reduxStore = createStore(rootReducer);

