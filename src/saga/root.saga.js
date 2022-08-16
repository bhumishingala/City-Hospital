import { signUpSaga } from "./Auth.saga";
import { all } from 'redux-saga/effects'

function* rootSaga(){
    yield all([
        signUpSaga
    ])
}
