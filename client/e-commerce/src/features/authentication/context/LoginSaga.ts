import {call, put, takeEvery} from "@redux-saga/core/effects"
import {VERIFY_USER} from "../data/action_types";
import {loggedInSuccess, logIn, setLoginError} from "./LoginActions";
import {reqAuth, reqLogIn} from "../services/auth_api";
import {LoginAction, LogInResponse, VerifyUserResponse} from "../data/types";
import {AxiosError} from "axios";




function* loginWorker (action : LoginAction) {
    const{email, password} = action;
    try {
        const response : LogInResponse = yield call(reqLogIn, email, password);
        if(response.status === 201) {
            yield put(loggedInSuccess(response.data.id))
        } else {
            yield put(setLoginError(response.data.message));
        }
    } catch (e) {
        if(e instanceof AxiosError) yield put(setLoginError(e.message));
        else if(typeof e === "string") yield put(setLoginError(e));
    }
}

export function* verifyUserWorker() {
    try {
        const res : VerifyUserResponse = yield call(reqAuth);
        console.log(res);
    } catch (e) {
        if(e instanceof AxiosError) yield put(setLoginError(e.message));
        else if(typeof e === "string") yield put(setLoginError(e));
    }
}

export function* loginWatcher () {
    yield takeEvery(logIn, loginWorker);
}

export function* verifyUserWatcher() {
    yield takeEvery(VERIFY_USER, verifyUserWorker);
}
