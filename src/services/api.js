import axios from "axios";

// backend_api
export const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:3000",
  headers: {
    Authorization: process.env.VUE_APP_AUTH // for testing only | from .env files
  }
});

export function GetSomeData(id, name) {
  return axios.get("&s=" + name, "&d=" + id).then(response => {
    return response.data;
  });
}

export function GetUserLogin() {
  return api.get("api/account/getuserlogin", {}).then(res => {
    return res.data;
    // console.log(result.data);
  });
}

// return as data (result:[], row:0)
export function GetEquipmentData(filter) {
  return api
    .get("api/equipment", {
      params: {
        page: filter && filter.page ? filter.page : 1,
        limit: filter && filter.limit ? filter.limit : 3
      }
    }) // Promise()
    .then(res => {
      console.log(res);
      return res.data; // .result .rows
    })
    .catch(error => {
      //console.log('ERROR:', error.response);
      if (error.response) console.log("ERROR:", error.response.data.message);
      return;
    });
}

export function clearToken() {
  delete api.defaults.headers.common["Authorization"];
}

// export default function () { } // export all function in this file
