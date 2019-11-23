import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
import { GetUserLogin, GetEquipmentData } from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // objects | state store for longterm use
    user: null,
    equipments: []
  },
  mutations: {
    // init objects | set state value from mutations action
    set_user_data: (state, user_data) => (state.user = user_data),
    set_equipments_data: (state, equipments_data) =>
      (state.equipments = equipments_data)
  },
  actions: {
    get_user_login: async ({ commit }) =>
      commit("set_user_data", await GetUserLogin()),

    set_equipments: async ({ commit }, filter) =>
      commit("set_equipments_data", await GetEquipmentData(filter))
  } // end action
});
