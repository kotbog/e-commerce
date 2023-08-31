import {all, fork} from "@redux-saga/core/effects";
import {loginWatcher} from "../features/authentication/context/LoginSaga";
import {signupWatcher} from "../features/authentication/context/SignupSaga";

export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
        fork(signupWatcher)
    ]);
}