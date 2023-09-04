import {SET_PRODUCTS, SET_PRODUCTS_ERROR} from "../data/action_types";

let initialState = {
    products: [],
    errorMessage: ''
};

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state,
                products: action.payload
            }
        }
        case SET_PRODUCTS_ERROR: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default ProductsReducer;