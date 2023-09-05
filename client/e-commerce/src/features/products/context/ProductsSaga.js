import {all, call, put, spawn, takeEvery} from "@redux-saga/core/effects";
import {GET_PRODUCT_INFO, GET_PRODUCTS} from "../data/action_types";
import {getProductById, getProducts} from "../services/products_api";
import {setErrorMessage, setProductInfo, setProductInfoError, setProducts} from "./ProductsActions";


function* getProductsWorker (action) {
    try {
        const products = yield call(getProducts, action.payload);
        yield put(setProducts(products));
    } catch (e) {
        yield put(setErrorMessage(e.message))
    }
}

function* getProductByIdWorker(action) {
    try {
        const product = yield call(getProductById, action.id);
        yield put(setProductInfo(product));
    } catch (e) {
        yield put(setProductInfoError(e.message))
    }
}


export function* getProductsWatcher () {
    yield takeEvery(GET_PRODUCTS, getProductsWorker)
}
export function* getProductByIdWatcher () {
    yield takeEvery(GET_PRODUCT_INFO, getProductByIdWorker)
}

export function* rootSagaProducts () {
    yield spawn(getProductsWatcher);
    yield spawn(getProductByIdWatcher);
}