import {all, fork} from "@redux-saga/core/effects";
import {loginWatcher} from "../features/authentication/context/LoginSaga";
import {signupWatcher} from "../features/authentication/context/SignupSaga";
import {getProductsWatcher} from "../features/products/context/ProductsSaga";

export default function* rootSaga() {
    yield all([
        fork(getProductsWatcher),
        fork(loginWatcher),
        fork(signupWatcher)

    ]);
}