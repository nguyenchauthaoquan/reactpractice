import {CALCULATE, CLEAR, GET_EXPRESSION} from "../constants";
import {calculatePostFix, infixToPostfix} from "../utils";

import {combineReducers} from "redux";

let initialState = {
    expression: "",
    result: 0,
}

const calculateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXPRESSION: {
            if (action.payload === "+" || action.payload === "-" || action.payload === "*" || action.payload === "/") {
                return {
                    expression: state.expression.concat(" " + action.payload + " ")
                };
            } else if (action.payload === "(") {
                return {
                    expression: state.expression.concat(action.payload + " ")
                };
            } else if (action.payload === ")") {
                return {
                    expression: state.expression.concat(" " + action.payload)
                };
            } else {
                return {
                    expression: state.expression.concat(action.payload)
                };
            }
        }
        case CALCULATE:
            return {
                expression: state.expression,
                result: calculatePostFix(infixToPostfix(state.expression))
            }
        case CLEAR:
            return {
                expression: "",
                result: 0
            }
        default:
            return state;
    }
}

export const reducer = combineReducers({
    calculator: calculateReducer,
    preloadedState: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});