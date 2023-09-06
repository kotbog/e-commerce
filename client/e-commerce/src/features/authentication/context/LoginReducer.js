import {
    LOG_IN,
    LOG_IN_ERROR,
    LOG_OUT,
    LOGGED_IN_SUCCESS,
    LOGGED_OUT_SUCCESS,
    SET_LOADING_LOGIN
} from "../data/action_types";

let initialState = {
    loading: false,
    loggedIn: false,
    errorMessage: '',
    user: {}
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING_LOGIN: {
            return {
                ...state,
                loading: true
            }
        }
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

        default: return state;
    }
}


export default loginReducer;