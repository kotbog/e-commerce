import {
    LOG_IN,
    LOG_IN_ERROR,
    LOGGED_IN_SUCCESS,
    SET_LOADING_AUTH,
    SET_VERIFY_USER,
    VERIFY_USER
} from "../data/action_types";
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

export const setVerifyUser = ({userId, error} : {userId?:string, error: boolean}) : VerifyUserAction => {
    return {type: SET_VERIFY_USER, userId, error}
}

export const setLoadingAuth = (loading : boolean) => {
    return {type: SET_LOADING_AUTH, loading}
}

export const verifyUser = () => {
    return {type: VERIFY_USER}
}


