import {ADD_CLASS, GET_CLASSES, GET_USERS} from "../constants";

export const getClassesAction = payload => {
    return {
        type: GET_CLASSES,
        payload: payload
    }
}

export const getUsersAction = payload => {
    return {
        type: GET_USERS,
        payload: payload
    }
}

export const postClassAction = payload => {
    return {
        type: ADD_CLASS,
        payload: payload
    }
}