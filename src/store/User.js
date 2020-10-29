export const UserModule = {
  namespaced: true,

  state: {
    user: null,
  },

  // affects state, dont refrence directly
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  // used to call mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
