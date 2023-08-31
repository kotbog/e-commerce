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
    errorMessage: ''
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
                loggedIn: true
            }
        }/*
        case LOG_OUT: {
            return {
                ...state,
                loading: true
            }
        }
        case LOGGED_OUT_SUCCESS: {
            return {
                ...state,
                loading: false,
                loggedIn: false
            }
        }*/
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