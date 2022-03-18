import {ADD_CLASS, GET_CLASSES, GET_USERS} from "../constants";
import {useEffect, useReducer} from "react";
import {getClassesAction, getUsersAction, postClassAction} from "../actions";
import axios from "axios";

var initialState = {
    classes: [],
    users: [],
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLASSES:
            return {
                ...state,
                classes: action.payload
            };
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case ADD_CLASS:
            return {
                ...state,
                classes: action.payload
            }
        default:
            return state;
    }
}

export function GetClasses() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        fetch("http://127.0.0.1:1880/class")
            .then(res => res.json())
            .then(data => dispatch(getClassesAction(data)))
    },[])

    return {
        classes: state.classes,
        dispatch
    }
}

export function PostClass(data) {
    const [state, dispatch] = useReducer(reducer, initialState);



    return {
        classes: state.classes,
        dispatch
    }
}

export function GetUsers() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        fetch("http://127.0.0.1:1880/user")
            .then(response => response.json())
            .then(data => dispatch(getUsersAction(data)))
    }, []);

    return {
        users: state.users,
        dispatch
    }
}

export function GetUser() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        user: state.user,
        dispatch
    }
}