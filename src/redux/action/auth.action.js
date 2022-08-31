import * as ActionType from '../ActionType';

export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGN_UP , payload : data});
}   

export const signInAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGN_IN , payload : data})
}

export const signedInAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGNED_IN , payload : data})
}

export const signOutAction  = () => (dispatch) => {
    dispatch({type : ActionType.SIGN_OUT})
}

export const signedOutAction = () => (dispatch) => {
    dispatch({type : ActionType.SIGNED_OUT})
}

export const forgotPassWordAction = (data) => (dispatch) => {
    dispatch({type : ActionType.FORGOT_PASSWORD , payload : data})
}  