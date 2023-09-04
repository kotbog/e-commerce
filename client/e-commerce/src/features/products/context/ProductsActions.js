import {GET_PRODUCTS, SET_PRODUCTS, SET_PRODUCTS_ERROR} from "../data/action_types";

export const setProducts = (products) => {
    return {type: SET_PRODUCTS, payload: products}
}

export const setErrorMessage = (error) => {
    return {type: SET_PRODUCTS_ERROR, payload: error}
}

export const getProductsAction = (params) => {
    return {type: GET_PRODUCTS, payload: params}
}



