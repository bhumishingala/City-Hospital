import { signUpSaga } from "./Auth.saga";
import { all } from 'redux-saga/effects'

export function* rootSaga(){
    yield all([
        signUpSaga()
    ])
}
