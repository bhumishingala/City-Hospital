import * as ActionType from '../ActionType';

export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGN_UP , payload : data});
}   