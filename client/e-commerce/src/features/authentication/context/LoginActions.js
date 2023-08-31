import {LOG_IN, LOG_IN_ERROR, LOGGED_IN_SUCCESS} from "../data/action_types";

export const logIn = (email, password) => {
    return {type: LOG_IN, email, password}
}
export const loggedInSuccess = () => {
    return {type: LOGGED_IN_SUCCESS}
}

export const setLoginError = (message) => {
    return {type: LOG_IN_ERROR, payload: message}
}