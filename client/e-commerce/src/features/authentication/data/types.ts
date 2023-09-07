
export interface ILoginState {
    loading: boolean,
    loggedIn: boolean,
    errorMessage?: string,
    user?: Object
}

export interface ISignupState {
    success: boolean,
    message?: string
}



export interface IRootState {
    Login: ILoginState,
    Signup: ISignupState
}