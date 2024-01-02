import {GET_CART_ITEMS, SET_CART_ERROR_MESSAGE, SET_CART_ITEMS} from "./action_types";
import {Product} from "../../../data/types";

export type CartItems = Array<Partial<Product & {quantity: number}>>

export type SetCartItemsAction = {type: typeof SET_CART_ITEMS, products: CartItems};

export type GetCartItemsAction = {type: typeof GET_CART_ITEMS, userId: string }

export type SetCartErrorMessageAction = {type: typeof SET_CART_ERROR_MESSAGE, message: string}
