import {
    GET_PRODUCT_INFO,
    GET_PRODUCTS,
    SET_PRODUCT_INFO,
    SET_PRODUCT_INFO_ERROR,
    SET_PRODUCTS,
    SET_PRODUCTS_ERROR
} from "../data/action_types";

export const setProducts = (products) => {
    return {type: SET_PRODUCTS, payload: products}
}

export const setErrorMessage = (error) => {
    return {type: SET_PRODUCTS_ERROR, payload: error}
}

export const getProductsAction = (params) => {
    return {type: GET_PRODUCTS, payload: params}
}

export const getProductByIdAction = (id) => {
    return {type: GET_PRODUCT_INFO, id}
}

export const setProductInfo = (data) => {
    return {type: SET_PRODUCT_INFO, payload: data}
}

export const setProductInfoError = (error) => {
    return {type: SET_PRODUCT_INFO_ERROR, message: error}
}

