import {call, put, takeEvery} from "@redux-saga/core/effects"
import {LOG_IN, VERIFY_USER} from "../data/action_types";
import {loggedInSuccess, setLoginError} from "./LoginActions";
import {reqAuth, reqLogIn} from "../services/auth_api";

function* loginWorker (action) {
    const{email, password} = action;
    try {
        const response = yield call(reqLogIn, email, password);
        if(response.status === 201) {
            yield put(loggedInSuccess(response.data.id))
        } else {
            yield put(setLoginError(response.data.message));
        }
    } catch (e) {
        yield put(setLoginError(e));
    }
}

export function* verifyUserWorker() {
    try {
        const res = yield call(reqAuth);
        debugger
    } catch (e) {
        yield put(setLoginError(e));
    }
}

export function* loginWatcher () {
    yield takeEvery(LOG_IN, loginWorker);
}

export function* verifyUserWatcher() {
    yield takeEvery(VERIFY_USER, verifyUserWorker);
}
