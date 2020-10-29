import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},

  // affects state, dont refrence directly
  mutations: {},
  // used to call mutations
  actions: {},

  modules: {
    User: UserModule,
  },
});
