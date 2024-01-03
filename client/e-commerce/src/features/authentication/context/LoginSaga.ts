import {call, put, takeEvery} from "@redux-saga/core/effects"
import {LOG_IN, VERIFY_USER} from "../data/action_types";
import {loggedInSuccess, setLoadingAuth, setLoginError, setVerifyUser} from "./LoginActions";
import {refreshToken, reqAuth, reqLogIn} from "../services/auth_api";
import {LogInAction, LogInResponse, RefreshTokenResponse, VerifyUserResponse} from "../data/types";
import {AxiosError} from "axios";




function* loginWorker (action : LogInAction) {
    const{email, password} = action;
    try {
        const response : LogInResponse = yield call(reqLogIn, email, password);
        if(response.status === 200) {
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
        yield put(setLoadingAuth(true));
        let res : VerifyUserResponse = yield call(reqAuth);
        if(res.error) {
            res = yield call(refreshToken);
        }
        yield put(setVerifyUser({userId: res.userId, error: res.error}));
        yield put(setLoadingAuth(false));
    } catch (e) {
        if(e instanceof AxiosError) yield put(setLoginError(e.message));
        else if(typeof e === "string") yield put(setLoginError(e));
    }
}

export function* loginWatcher () {
    yield takeEvery(LOG_IN, loginWorker);
}

export function* verifyUserWatcher() {
    yield takeEvery(VERIFY_USER, verifyUserWorker);
}
