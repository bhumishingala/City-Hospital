import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignInapi, SignOutapi, SignUpapi } from '../../common/api/Auth.api';
import { setAlert } from '../action/alert.action';
import * as ActionType from '../ActionType';

function* SignUp(action) {
  try {
    const user = yield call(SignUpapi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* SignIn(action) {
  try {
    const user = yield call(SignInapi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* SignOut(action) {
  try {
    const user = yield call(SignOutapi);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* watchSignUp() {
  yield takeEvery(ActionType.SIGN_UP, SignUp);
}

function* watchSignIn() {
  yield takeEvery(ActionType.SIGN_IN, SignIn);
}

function* watchSignOut() {
  yield takeEvery(ActionType.SIGN_OUT, SignOut)
}

export function* signUpSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchSignOut()
  ])
}
