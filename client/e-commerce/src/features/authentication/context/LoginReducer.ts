import {
    LOG_IN_ERROR,
    LOGGED_IN_SUCCESS
} from "../data/action_types";
import {LoggedInSuccessAction, SetLoginErrorAction} from "../data/types";

let initialState = {
    loading: false,
    loggedIn: false,
    errorMessage: '',
    user: {}
};
type LoginReducerAction = LoggedInSuccessAction | SetLoginErrorAction
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

        default: return state;
    }
}


export default loginReducer;