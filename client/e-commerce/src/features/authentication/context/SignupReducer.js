import {SET_SIGNUP_DATA, SET_SIGNUP_ERROR} from "../data/action_types";

let initialState = {
    success: false,
    message: ''
};


function SignupReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SIGNUP_DATA: {
            return {
                ...state,
                message: action.payload.message,
                success: action.payload.success

            }
        }
        default: return state;
    }
}

export default SignupReducer;