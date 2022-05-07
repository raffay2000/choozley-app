import { SET_EMAIL } from "../Actions/RegisterAction";
import {
  LOGIN,
  LOGIN_DONE,
  PUT_USER_DATA,
  PUT_USER_TOKEN,
  RESET,
  REGISTER,REGISTER_DONE
} from "../Constants";
const initialState = {
  email: "",
  user: {},
  token: "",
  message: "",
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return { ...state, loading: false, message: "" };
    case LOGIN:
      return { ...state, loading: true, message: "" };
    case LOGIN_DONE:
      return {
        ...state,
        loading: false,
        message: action.message,
        user: action.payload,
      };
      case REGISTER:
        return{
          ...state,
          loading:true,
          message:""
        }
      case REGISTER_DONE:
        return{
          ...state,
          loading:false,
          message:action.message,
        }
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case PUT_USER_DATA:
      return { ...state, user: action.payload };
    case PUT_USER_TOKEN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};
