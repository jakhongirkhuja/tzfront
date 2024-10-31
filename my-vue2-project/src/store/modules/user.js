const state = {
    userInfo: null,
  };
  
  const getters = {
    getUserInfo: (state) => state.userInfo,
  };
  
  const actions = {
    async fetchUserInfo({ commit }) {
      try {
        const response = await fetch('/api/user'); // Replace with your API endpoint
        const data = await response.json();
        commit('setUserInfo', data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
    },
    clearUserInfo({ commit }) {
      commit('setUserInfo', null);
    },
  };
  
  const mutations = {
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
  