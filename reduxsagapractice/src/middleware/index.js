import {call, delay, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {changeStatusAction, getDataAction, setDataAction} from "../actions";
import {GET_DATA} from "../constants";

function* getUsers() {
    var users = [];

    yield axios("http://127.0.0.1:1880/user").then(response => response.data).then(json => users = json);

    return users;
}

function* getData() {
    yield delay(2000);
    yield put(changeStatusAction({status: "Loading..."}));

    let users = yield call(getUsers);

    if (users) {
        yield put(setDataAction({users: users}));
    } else {
        yield put(setDataAction({users: []}))
    }
}

export function* getDataMiddleWare() {
    yield takeLatest(GET_DATA, getData);
}