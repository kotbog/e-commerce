import {all, fork} from "@redux-saga/core/effects";
import {loginWatcher} from "../features/authentication/context/LoginSaga";
import {signupWatcher} from "../features/authentication/context/SignupSaga";
import {rootSagaProducts} from "../features/products/context/ProductsSaga";
import {rootCartSaga} from "../features/cart/context/CartSaga";

export default function* rootSaga() {
    yield all([
        fork(rootSagaProducts),
        fork(loginWatcher),
        fork(signupWatcher),
        fork(rootCartSaga)
    ]);
}