export const IS_SIGN_IN = "IS_SIGN_IN"
export const SET_EMAIL = "SET_EMAIL"


export const setIsSignIn = (email)=>{
    return {
        type :IS_SIGN_IN,
        payload:email,
    }
}

export const setEmail = (email)=>{
    return {
        type :SET_EMAIL,
        payload:email,
    }
}