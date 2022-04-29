import { IS_SIGN_IN, SET_EMAIL } from "../Actions/RegisterAction"
const initialState = {
    isSignIn:false,
    email:''
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case IS_SIGN_IN:
            return{
                ...state,
                isSignIn:action.payload
            }
            case SET_EMAIL:
                return{
                    ...state,
                    email:action.payload
                }
            
        default:
            return state
    }
}
