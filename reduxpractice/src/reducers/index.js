import {CALCULATE, GET_EXPRESSION} from "../constants";

import {combineReducers} from "redux";

let initialState = {
    expression: "",
    result: 0,
}

const calculateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXPRESSION:
            return {
                expression: state.expression.concat(action.payload)
            };
        case CALCULATE:
            return {
                expression: state.expression,
                result: eval(state.expression)
            }
        default:
            return state;
    }
}

export const reducer = combineReducers({
    calculator: calculateReducer,
    preloadedState: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});