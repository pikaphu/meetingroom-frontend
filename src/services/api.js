import axios from "axios"; //const axios = require('axios').default

// +backend_api
// Global Default API
//axios.defaults.headers.common['Authorization'] = 'secret'

// Instance API 1
export const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:3000",
  withCredentials: true, // need to use for auto session cookie
  credentials: "same-origin"
});

// Instance API 2
export const apiTest = axios.create({
  baseURL: api.baseURL,
  headers: {
    Authorization: process.env.VUE_APP_AUTH, // for testing only | from .env files
    "Access-Control-Allow-Origin": "*"
  },
  withCredentials: true,
  credentials: "same-origin" // include
});

// testing func
export function GetSomeData(id, name) {
  return axios.get("&s=" + name, "&d=" + id).then(response => {
    return response.data;
  });
}

export function GetUserLogin() {
  return api
    .get("api/account/getuserlogin")
    .then(res => {
      console.log("GetUserLogin:", res.data);
      return res.data;
    })
    .catch(() => {
      throw new Error("GetUserLogin Error!");
    });
}

// return as data (result:[], row:0)
export function GetEquipmentData(
  filter = {
    page: 1
  } // default value
) {
  // check params
  console.log("Filter:", filter);

  // default params rule
  filter["page"] = filter["page"] || 1;
  filter["limit"] = filter["limit"] || 5;

  // return data
  return api
    .get("api/equipment", {
      params: filter
    }) // Promise()
    .then(res => {
      console.log("Get Equip Data:", res);
      return res.data; // .result .rows
    })
    .catch(error => {
      //console.log('ERROR:', error.response);
      if (error.response) console.log("ERROR:", error.response.data.message);
      return;
    });
}

export function clearToken() {
  try {
    delete axios.defaults.headers.common["Authorization"];
    delete api.defaults.headers.common["Authorization"];
  } catch (error) {
    console.log(error);
  }
}

// export default function () { } // export all function in this file
