import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import LoginReducer from "../features/authentication/context/LoginReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";
import SignupReducer from "../features/authentication/context/SignupReducer";

const sagaMiddleware = createSagaMiddleware();


let rootReducer = combineReducers({
    Login: LoginReducer,
    Signup: SignupReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;