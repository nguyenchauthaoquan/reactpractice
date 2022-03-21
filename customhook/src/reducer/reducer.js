import {getUsersReducer} from "./users";

const redux = require("redux")

const reducer = redux.combineReducers({
    users: getUsersReducer,
    preloadedState: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default reducer;