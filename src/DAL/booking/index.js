import { invokeApi } from "../../bl_libs/invokeApi";

export const search_flights = async (data) => {
  let requestObj = {
    path: "/api/flights",
    method: "POST",
    headers: {
    //   "x-sh-auth": localStorage.getItem("token"),
    },
  };
  requestObj["postData"] = data;

  return invokeApi(requestObj);
};