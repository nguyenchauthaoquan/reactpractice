import {CHANGE_STATUS, SET_DATA} from "../constants";

var initialState = {
    users: [],
    status: ""
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                status: action.payload.status
            };
        case SET_DATA:
            return {
                ...state,
                users: action.payload.users
            };
        default:
            return state;
    }
}

export default usersReducer;