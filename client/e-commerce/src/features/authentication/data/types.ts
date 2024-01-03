import {
    LOG_IN,
    LOG_IN_ERROR,
    LOGGED_IN_SUCCESS,
    SET_LOADING_AUTH,
    SET_SIGNUP_DATA, SET_VERIFY_USER,
    SIGN_UP
} from "./action_types";



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

export type setLoadingAuthAction = {type: typeof SET_LOADING_AUTH, loading: boolean}


export type VerifyUserResponse = {
    error: boolean,
    message: string,
    userId?: string,
}

export type RefreshTokenResponse = VerifyUserResponse;

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
    type: typeof SET_VERIFY_USER
    error: boolean,
    userId?: string
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

