import * as ActionType from '../ActionType';

const initVal = {
    isLoading : false,
    user : null,
    error : ''
}


export const authReducer = (state = initVal, action) => {
    switch(action.type){
        case ActionType.SIGNED_IN : 
            return {
                ...state,
                isLoading : false,
                user : action.payload,
                error : ''
            }
        case ActionType.SIGNED_OUT : 
            return {
                ...state,
                isLoading : false,
                user : null,
                error : ''
            }
        default :
            return state;
    }
}