import {CHANGE_STATUS, GET_DATA, SET_DATA} from "../constants";

export const changeStatusAction = payload => {
    return {
        type: CHANGE_STATUS,
        payload: payload
    }
}

export const setDataAction = payload => {
    return {
        type: SET_DATA,
        payload: payload
    }
}

export const getDataAction = () => {
    return {
        type: GET_DATA
    }
}