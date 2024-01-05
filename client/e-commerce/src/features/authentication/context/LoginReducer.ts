import {
    LOG_IN_ERROR,
    LOGGED_IN_SUCCESS, LOGGED_OUT_SUCCESS, SET_LOADING_AUTH, SET_VERIFY_USER
} from "../data/action_types";
import {
    LoggedInSuccessAction,
    LogoutSuccessAction,
    setLoadingAuthAction,
    SetLoginErrorAction,
    VerifyUserAction
} from "../data/types";

let initialState = {
    loading: false,
    loggedIn: false,
    errorMessage: '',
    user: null
};
type LoginReducerAction = LoggedInSuccessAction | SetLoginErrorAction | VerifyUserAction | setLoadingAuthAction | LogoutSuccessAction
function loginReducer(state = initialState, action:LoginReducerAction) {
    console.log(action)
    switch (action.type) {
        case LOGGED_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.user
            }
        }
        case LOG_IN_ERROR: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        }
        case SET_VERIFY_USER: {
            return {
                ...state,
                loggedIn: !action.error,
                user: action.user
            }
        }
        case SET_LOADING_AUTH: {
            return {...state, loading: action.loading}
        }
        case LOGGED_OUT_SUCCESS: {
            return {
                ...state,
                user: null,
                loggedIn: false
            }
        }
        default: return state;
    }
}


export default loginReducer;