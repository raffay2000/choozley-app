export const IS_SIGN_IN = "IS_SIGN_IN"
export const SET_EMAIL = "SET_EMAIL"
import FormData from "form-data"
import Toast  from "react-native-toast-message"
import { navigate } from "../../navigation"
import { setItem } from "../../persist-storage"
import { fetchAPI } from "../../Services"
import {LOGIN,LOGIN_DONE,REGISTER_DONE,REGISTER} from "../Constants"

// export const setIsSignIn = (email)=>{
//     return {
//         type :IS_SIGN_IN,
//         payload:email,
//     }
// }

export const setEmail = (email)=>{
    return {
        type :SET_EMAIL,
        payload:email,
    }
}
export const login = (email, password, context) => {
    return async function (dispatch) {
      dispatch({
        type: LOGIN,
      });
      var data = {
          email,
          password,
      }
      var myHeaders = new Headers();
    // myHeaders.append(
    //     "Authorization",
    //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjE5LjIwXC9zdG9yeXNoYXJlXC9wdWJsaWNcL2FwaVwvbG9naW4iLCJpYXQiOjE2NDI3ODk3NzIsImV4cCI6MTY0MzM5NDU3MiwibmJmIjoxNjQyNzg5NzcyLCJqdGkiOiJQVmxYNnMwTXZUdGJsdjdvIiwic3ViIjoyNTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.eAQgcBiritc0uBQHOj0nQB3AXcN_Jgs4NnPyUpDHOq8"
    // );
    myHeaders.append("Content-Type", "application/json");
      fetchAPI("post", "login", data,myHeaders)
        .then((response) => {
          response
            .json()
            .then((data) => {
              console.log(data);
              if (data.success == true) {
                // console.log(data.success)
                loginDone(dispatch, "Login Successful", data);
                setItem("user", JSON.stringify(data));
                setItem("token", data.token);
                context.updateState();
              } else {
                Toast.show({ text1: "Incorrect Email or Password" });
                loginDone(dispatch, data.message);
              }
            })
            .catch((error) => {
              console.log(error);
              loginDone(dispatch, "Some Problem Occurred");
            });
        })
        .catch((error) => {
          console.log(error);
          loginDone(dispatch, "Some Problem Occurred");
        });
    };
  };

  const loginDone = (dispatch, message, payload = {}) => {
    dispatch({
      type: LOGIN_DONE,
      message,
      payload,
    });
  };
  export const signUp = (full_name, email, username, password,dob) => {
    // let data = new FormData();
    // data.append("fullname",full_name)
    // data.append("email",email)
    // data.append("username",username)
    // data.append("password",password)
    // data.append("dob",dob)
    let data= {
      full_name,password,email
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    //   'Content-Type': 'application/x-www-form-urlencoded',
    return function (dispatch) {
      dispatch({
        type: REGISTER,
      });
      fetchAPI("post", "register", data,myHeaders)
        .then((response) => {
          response
            .json()
            .then((data) => {
              console.log(JSON.stringify(data));
              if (data.success ===true ){
                alert("Sucessful signUp")
                navigate("Login");
                registerDone(dispatch, "Registered Successfully");
              } else {
                registerDone(dispatch, data.message);
              }
            })
            .catch((err) => {
              console.log(err);
              // registerDone(dispatch, "Some Problem Occurred");
            });
        })
        .catch((error) => {
          console.log(error);
          registerDone(dispatch, "Some Problem Occurred");
        });
    };
  };
  const registerDone = (dispatch, message) => {
    Toast.show({ text1: message });
    dispatch({
      type: REGISTER_DONE,
      message,
    });
  };