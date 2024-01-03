import {
    LOG_IN_ERROR,
    LOGGED_IN_SUCCESS, SET_LOADING_AUTH, SET_VERIFY_USER
} from "../data/action_types";
import {LoggedInSuccessAction, setLoadingAuthAction, SetLoginErrorAction, VerifyUserAction} from "../data/types";

let initialState = {
    loading: false,
    loggedIn: false,
    errorMessage: '',
    user: {}
};
type LoginReducerAction = LoggedInSuccessAction | SetLoginErrorAction | VerifyUserAction | setLoadingAuthAction
function loginReducer(state = initialState, action:LoginReducerAction) {
    console.log(action)
    switch (action.type) {
        case LOGGED_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: {id: action.id}
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
                user: {id: action.userId}
            }
        }
        case SET_LOADING_AUTH: {
            return {...state, loading: action.loading}
        }
        default: return state;
    }
}


export default loginReducer;