import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    equipments: []
  },
  mutations: {
    set_user: (state, user_data) => (state.user = user_data),
    set_equipments: (state, equipments_data) =>
      (state.equipments = equipments_data)
  },
  actions: {
    get_user_login: ({ commit }) =>
      Axios.get("api/account/getuserlogin").then(res => {
        commit("set_user", res.data);
        // console.log(result.data);
      }),

    set_equipments: ({ commit }) => {
      Axios.get("api/equipment", {
        headers: {
          Authorization: process.env.VUE_APP_AUTH // for testing only | from .env files
        },
        params: {
          page: 1
        }
      })
        .then(res => {
          console.log(res);
          commit("set_equipments", res.data.result);
        })
        .catch(error => {
          //console.log('ERROR:', error.response);
          if (!error.response) return;
          console.log("ERROR:", error.response.data.message);
        });
    }
  }
});
