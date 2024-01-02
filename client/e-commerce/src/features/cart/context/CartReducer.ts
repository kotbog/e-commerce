import {GET_CART_ITEMS, SET_CART_ERROR_MESSAGE, SET_CART_ITEMS} from "../data/action_types";
import {Product} from "../../../data/types";
import {GetCartItemsAction, SetCartErrorMessageAction, SetCartItemsAction} from "../data/types";

let initialState = {
    items: Array<Partial<Product> & {quantity: number}>,
    errorMessage: '',
    isLoading: false
};

type CartReducerAction = SetCartItemsAction | GetCartItemsAction | SetCartErrorMessageAction;
export default function CartReducer (state = initialState, action : CartReducerAction) {
    switch (action.type) {
        case SET_CART_ITEMS: {
            return {
                ...state,
                items: action.products,
                isLoading: false
            }
        }
        case GET_CART_ITEMS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_CART_ERROR_MESSAGE : {
            return {
                ...state,
                errorMessage: action.message,
                isLoading: false
            }
        }
        default: {
            return {...state}
        }
    }
}