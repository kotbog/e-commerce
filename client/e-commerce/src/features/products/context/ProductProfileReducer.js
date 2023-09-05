import {GET_PRODUCT_INFO, SET_PRODUCT_INFO, SET_PRODUCT_INFO_ERROR} from "../data/action_types";

let initialState = {
    product: {},
    errorMessage: '',
    isLoading: false
};


const ProductProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_INFO: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_PRODUCT_INFO: {
            const{_id, name, desc, sku, price, images} = action.payload;
            return {
                ...state,
                isLoading: false,
                product: {
                id: _id,
                name, desc, sku, price, images
                }
            }
        }
        case SET_PRODUCT_INFO_ERROR: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.message
            }
        }
        default: return state;
    }

}

export default ProductProfileReducer;