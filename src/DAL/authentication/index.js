import { invokeApi } from "../../bl_libs/invokeApi";

export const Signin = async (data) => {
  let requestObj = {
    path: "/api/login",
    method: "POST",
    headers: {
    //   "x-sh-auth": localStorage.getItem("token"),
    },
  };
  requestObj["postData"] = data;

  return invokeApi(requestObj);
};

export const Signup = async (data) => {
    let requestObj = {
      path: "/api/register",
      method: "POST",
      headers: {
        // "x-sh-auth": localStorage.getItem("token"),
      },
    };
    requestObj["postData"] = data;
  
    return invokeApi(requestObj);
  };

  export const loginOtp = async (data) => {
    let requestObj = {
      path: "/api/loginOtp",
      method: "POST",
      headers: {
        // "x-sh-auth": localStorage.getItem("token"),
      },
    };
    requestObj["postData"] = data;
  
    return invokeApi(requestObj);
  };

  export const logout = async (data) => {
    let requestObj = {
      path: "/api/logout",
      method: "POST",
      headers: {
        // "x-sh-auth": localStorage.getItem("token"),
      },
    };
    requestObj["postData"] = data;
  
    return invokeApi(requestObj);
  };