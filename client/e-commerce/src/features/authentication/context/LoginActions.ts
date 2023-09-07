import {LOG_IN, LOG_IN_ERROR, LOGGED_IN_SUCCESS, VERIFY_USER} from "../data/action_types";

export const logIn = (email, password) => {
    return {type: LOG_IN, email, password}
}
export const loggedInSuccess = (id) => {
    return {type: LOGGED_IN_SUCCESS, id}
}

export const setLoginError = (message) => {
    return {type: LOG_IN_ERROR, payload: message}
}

export const verifyUser = () => {
    return {type: VERIFY_USER}
}