import {CHANGE_STATUS, GET_USERS, SET_USERS} from "../constants/constants";

const initialState = {
    status: "",
    users: []
}

export const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        case SET_USERS:
            return {
                status: "",
                users: action.payload.users
            }
        default:
            return state
    }
}