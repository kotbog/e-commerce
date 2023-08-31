import {SET_SIGNUP_DATA, SIGN_UP} from "../data/action_types";

export const signUpAction = (email, password, first_name, last_name) => {
    return {
        type: SIGN_UP,
        payload: {
            email, password, first_name, last_name
        }
    }
}

export const setSignupData = (message, success) => {
    return {
        type: SET_SIGNUP_DATA,
        payload: {
            message,
            success
        }
    }
}

export const setSignupError = (message) => {
    return {

    }
}