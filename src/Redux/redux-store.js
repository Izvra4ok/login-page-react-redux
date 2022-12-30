import {combineReducers, legacy_createStore} from "redux";
import {authReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
})


export const reduxStore = legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

window.__store__ = reduxStore;

