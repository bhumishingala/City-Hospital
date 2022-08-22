import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignUpapi } from '../../common/api/Auth.api';
import * as ActionType from '../ActionType';

function* SignUp(action) {
   try {
      const user = yield call(SignUpapi, action.payload);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSignUp() {
  yield takeEvery(ActionType.SIGN_UP, SignUp);
}

export function* signUpSaga() {
    yield all([
        watchSignUp()
    ])
}
