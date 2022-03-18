import {combineReducers} from "redux";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
    users: usersReducer,
    preloadedState: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default reducer;