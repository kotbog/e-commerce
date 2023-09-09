import {LOG_IN, LOG_IN_ERROR, LOGGED_IN_SUCCESS, VERIFY_USER} from "../data/action_types";
import {LoggedInSuccessAction, LogInAction, SetLoginErrorAction, VerifyUserAction} from "../data/types";


export const logIn = (email : string, password : string) : LogInAction => {
    return {type: LOG_IN, email, password}
}
export const loggedInSuccess = (id : string | number) : LoggedInSuccessAction => {
    return {type: LOGGED_IN_SUCCESS, id}
}

export const setLoginError = (message : string) : SetLoginErrorAction => {
    return {type: LOG_IN_ERROR, payload: message}
}

export const verifyUser = () : VerifyUserAction => {
    return {type: VERIFY_USER}
}

