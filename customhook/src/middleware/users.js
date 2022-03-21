import {call, delay, put, takeLatest} from "redux-saga/effects";
import {changeStatusAction, getUsersAction, setUsersAction} from "../actions/actions";
import {GET_USERS} from "../constants/constants";

const axios = require("axios");

function* getUsers() {
    let users = [];
    yield axios.get("http://127.0.0.1:1880/user").then(response => response.data).then(json => users = json);

    return users;
}

function* GetUsers() {
    yield delay(5000);
    yield put(changeStatusAction({status: "Loading"}));

    let users = yield call(yield getUsers);

    if (users) {
        yield put(setUsersAction({users}));
    } else {
        yield put(setUsersAction({users: []}))
    }
}

export function* GetUsersMiddleWare() {
    yield takeLatest(GET_USERS, GetUsers);
}