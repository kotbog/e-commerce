import {all, fork} from "@redux-saga/core/effects";
import {loginWatcher} from "../features/authentication/context/LoginSaga";
import {signupWatcher} from "../features/authentication/context/SignupSaga";
import {getProductsWatcher, rootSagaProducts} from "../features/products/context/ProductsSaga";

export default function* rootSaga() {
    yield all([
        fork(rootSagaProducts),
        fork(loginWatcher),
        fork(signupWatcher)

    ]);
}