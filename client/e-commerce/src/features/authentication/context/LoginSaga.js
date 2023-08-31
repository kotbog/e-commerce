import {call, put, takeEvery} from "@redux-saga/core/effects"
import {LOG_IN} from "../data/action_types";
import {loggedInSuccess, setLoginError} from "./LoginActions";
import {reqLogIn} from "../services/auth_api";

function* loginWorker (action) {
    const{email, password} = action;
    try {
        const response = yield call(reqLogIn, email, password);
        if(response.status === 201) {
            yield put(loggedInSuccess())
        } else {
            yield put(setLoginError(response.data.message));
        }
    } catch (e) {
        yield put(setLoginError(e));
    }
}
export function* loginWatcher () {
    yield takeEvery(LOG_IN, loginWorker);
}
