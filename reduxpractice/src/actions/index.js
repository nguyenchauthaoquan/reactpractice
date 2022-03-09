import {GET_EXPRESSION} from "../constants";

export const getExpression = (payload) => {
    return {
        type: GET_EXPRESSION,
        payload: payload
    }
}