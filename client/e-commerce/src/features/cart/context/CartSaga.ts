import {all, call, put, spawn, take, takeEvery} from "@redux-saga/core/effects";
import {ADD_ITEM_TO_CART_AUTH, ADD_ITEM_TO_CART_LOCAL, GET_CART_ITEMS, SEND_ORDER} from "../data/action_types";
import {
    addCartItemAuthAction,
    addCartItemLocalAction,
    addCartItemResponse,
    CartItems,
    GetCartItemsAction, sendOrderAction, sendOrderDataResponse
} from "../data/types";
import {addItemToCart, getCartItems, sendOrderItems} from "../services/cart_api";
import {getCartItems as getCartAction} from '../context/CartActions'
import {setCartErrorMessage, setCartItems, setLoadingCart} from "./CartActions";
import {AxiosError} from "axios";
import {Product} from "../../../data/types";
import instance from "../../../lib/axios";


function* getCartItemsWorker(action: GetCartItemsAction) {
    try {
        yield put(setLoadingCart(true));
        const response : CartItems = yield call(getCartItems, action.userId);
        yield put(setCartItems(response));
        yield put(setLoadingCart(false));
    } catch (e) {
        if(e instanceof AxiosError) {
            yield put(setCartErrorMessage(e.message));
        }else if (typeof e === "string") yield put(setCartErrorMessage(e))
    }
}

function* addToCartLocalWorker({product}: addCartItemLocalAction) {
    try {
    const items : Array<Product & {quantity: number |string}> = localStorage.getItem('cart-items')
        ? JSON.parse(localStorage.getItem('cart-items') as string)
        : [];

    let checkExist = items.some((item) => {
            return item._id === product._id;
        });
        if(!checkExist) {
            items.push(product);
            yield put(setCartItems(items));
            localStorage.setItem("cart-items", JSON.stringify(items));
            return;
        }

        const newItems = items.map(item => {
            if(item._id === product._id) {
                const {quantity, ...itemProp} = item;
                return {quantity: Number(item.quantity) + Number(product.quantity), ...itemProp};
            }
            return item;

        });
    yield put(setCartItems(items));
    localStorage.setItem("cart-items", JSON.stringify(newItems));
    } catch (e) {
        if(e instanceof AxiosError) {
            yield put(setCartErrorMessage(e.message));
        }else if (typeof e === "string") yield put(setCartErrorMessage(e))
    }
}

function* addToCartAuthWorker({product, userId}: addCartItemAuthAction) {
    try {
        console.log(userId);
        yield put(setLoadingCart(true));
        const productData = {
            id: product._id,
            quantity: product.quantity
        }
        const {data} : addCartItemResponse = yield call(instance.post, "/cart/items", {userId, productData});
        if(data.error) {
            setCartErrorMessage(data.message);
            yield put(setLoadingCart(false));
            return;
        }
        yield put(setLoadingCart(false));
    } catch (e) {
        if(e instanceof AxiosError) {
            yield put(setCartErrorMessage(e.message));
        }else if (typeof e === "string") yield put(setCartErrorMessage(e))
    }
}

export function* sendOrderDataWorker(action : sendOrderAction) {
    try {
        yield put(setLoadingCart(true));
        const res : sendOrderDataResponse = yield call(instance.post, "/cart/checkout", {user: action.payload.user, items: action.payload.cartItems});
        if(res.data.error) {
            yield put(setCartErrorMessage(res.data.message));
            yield put(setLoadingCart(false));
            return;
        }
        localStorage.removeItem('cart-items');
        yield put(setCartItems([]));
        yield put(setLoadingCart(false));
    } catch (e) {
        if(e instanceof AxiosError) {
            yield put(setCartErrorMessage(e.message));
        }else if (typeof e === "string") yield put(setCartErrorMessage(e))
    }
}

export function* sendOrderWatcher() {
    yield takeEvery(SEND_ORDER, sendOrderDataWorker)
}

export function* getCartItemsWatcher() {
    yield takeEvery(GET_CART_ITEMS, getCartItemsWorker);
}
export function* addCartItemLocalWatcher() {
    yield takeEvery(ADD_ITEM_TO_CART_LOCAL, addToCartLocalWorker);
}
export function* addCartItemAuthWatcher() {
    yield takeEvery(ADD_ITEM_TO_CART_AUTH, addToCartAuthWorker);
}




export function* rootCartSaga() {
    yield all([
        spawn(getCartItemsWatcher),
        spawn(addCartItemLocalWatcher),
        spawn(addCartItemAuthWatcher),
        spawn(sendOrderWatcher),
    ])
}