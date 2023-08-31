import {call, put, takeEvery} from "@redux-saga/core/effects";
import {SIGN_UP} from "../data/action_types";
import {fetchSignUp, reqSignUp} from "../services/auth_api";
import {setSignupData} from "./SignupActions";

function* signupWorker({payload}) {
    try {
        const {email, password, first_name, last_name} = payload;
        const data = yield call(reqSignUp, email, password, first_name, last_name);
        console.log(data);
        //yield put(setSignupData())
    } catch (e) {
        console.log(e);
    }

}

export function* signupWatcher () {
    yield takeEvery(SIGN_UP, signupWorker);
}