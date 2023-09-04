import {call, put, takeEvery} from "@redux-saga/core/effects";
import {GET_PRODUCTS} from "../data/action_types";
import {getProducts} from "../services/products_api";
import {setErrorMessage, setProducts} from "./ProductsActions";


function* getProductsWorker (action) {
    try {
        console.log('Worked')
        const products = yield call(getProducts, action.payload);
        yield put(setProducts(products));
    } catch (e) {
        yield put(setErrorMessage(e.message))
    }
}
export function* getProductsWatcher () {
    yield takeEvery(GET_PRODUCTS, getProductsWorker)
}