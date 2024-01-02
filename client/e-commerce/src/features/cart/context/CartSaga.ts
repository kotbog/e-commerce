import {call, put, spawn, takeEvery} from "@redux-saga/core/effects";
import {GET_CART_ITEMS} from "../data/action_types";
import {CartItems, GetCartItemsAction} from "../data/types";
import {getCartItems} from "../services/cart_api";
import {setCartErrorMessage, setCartItems} from "./CartActions";
import {AxiosError} from "axios";


function* getCartItemsWorker(action: GetCartItemsAction) {
    try {
        console.log('cart saga')
        const response : CartItems= yield call(getCartItems, action.userId);
        yield put(setCartItems(response));
    } catch (e) {
        if(e instanceof AxiosError) {
            yield put(setCartErrorMessage(e.message));
        }else if (typeof e === "string") yield put(setCartErrorMessage(e))
    }
}

export function* getCartItemsWatcher() {
    yield takeEvery(GET_CART_ITEMS, getCartItemsWorker);
}

export function* rootCartSaga() {
    yield spawn(getCartItemsWatcher);
}