import {GET_CART_ITEMS, SET_CART_ERROR_MESSAGE, SET_CART_ITEMS, SET_LOADING_CART} from "../data/action_types";
import {Product} from "../../../data/types";
import {GetCartItemsAction, SetCartErrorMessageAction, SetCartItemsAction, SetLoadingCartAction} from "../data/types";

export const setCartItems = (products: Array<Partial<Product & {quantity: string | number}>>)  : SetCartItemsAction  =>  {
    return {type: SET_CART_ITEMS, products};
};

export const getCartItems = (userId: string) : GetCartItemsAction => {
    return {type: GET_CART_ITEMS, userId};
}

export const setCartErrorMessage = (message: string) : SetCartErrorMessageAction => {
    return {type: SET_CART_ERROR_MESSAGE, message}
}

export const setLoadingCart = (loading: boolean) : SetLoadingCartAction => {
    return {type: SET_LOADING_CART, loading}
}