import {applyMiddleware, createStore} from "redux";
import createSagaMiddleWare from "redux-saga";

import reducer from "../reducer";
import {getDataMiddleWare} from "../middleware";
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

export default store;

sagaMiddleWare.run(getDataMiddleWare);