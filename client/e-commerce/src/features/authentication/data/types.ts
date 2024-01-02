import {LOG_IN, LOG_IN_ERROR, LOGGED_IN_SUCCESS, SET_SIGNUP_DATA, SIGN_UP, VERIFY_USER} from "./action_types";



export type SetSignupDataAction = {
    type: typeof SET_SIGNUP_DATA,
    payload: {
        message: string,
        success: boolean
    }
}
export type SignupAction = {
    type: typeof SIGN_UP,
    payload: {
        email : string, password : string, first_name : string, last_name : string
    }
}



export type VerifyUserResponse = {
    status: boolean,
    id?: string | number
}
export type LogInAction = {
    type: typeof LOG_IN,
    email: string,
    password: string
}
export type LoggedInSuccessAction = {
    type: typeof LOGGED_IN_SUCCESS,
    id: string | number
}
export type SetLoginErrorAction = {
    type: typeof LOG_IN_ERROR,
    payload: string
}
export type VerifyUserAction = {
    type: typeof VERIFY_USER
}

export type LogInResponse = {
    status: number | string,
    data: {
        id: number | string,
        message: string
    }
}
export type SignUpResponse = {
    message: string,
    success: boolean
}

