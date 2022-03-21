import reducer from "../reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {GetUsersMiddleWare} from "../middleware/users";

const redux = require("redux");
const middleware = createSagaMiddleware();

const store = redux.createStore(reducer, composeWithDevTools(redux.applyMiddleware(middleware)));

middleware.run(GetUsersMiddleWare);

export default store;