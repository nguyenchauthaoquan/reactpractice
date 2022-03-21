import {CHANGE_STATUS, GET_USERS, SET_USERS} from "../constants/constants";

export const changeStatusAction = payload => {
  return {
      type: CHANGE_STATUS,
      payload
  }
}

export const getUsersAction = payload => {
    return {
        type: GET_USERS,
        payload
    }
}

export const setUsersAction = payload => {
    return {
        type: SET_USERS,
        payload
    }
}