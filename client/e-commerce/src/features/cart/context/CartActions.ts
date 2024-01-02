import {GET_CART_ITEMS, SET_CART_ERROR_MESSAGE, SET_CART_ITEMS} from "../data/action_types";
import {Product} from "../../../data/types";
import {GetCartItemsAction, SetCartErrorMessageAction, SetCartItemsAction} from "../data/types";

export const setCartItems = (products: Array<Partial<Product & {quantity: number}>>)  : SetCartItemsAction  =>  {
    return {type: SET_CART_ITEMS, products};
};

export const getCartItems = (userId: string) : GetCartItemsAction => {
    return {type: GET_CART_ITEMS, userId};
}

export const setCartErrorMessage = (message: string) : SetCartErrorMessageAction => {
    return {type: SET_CART_ERROR_MESSAGE, message}
}