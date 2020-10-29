export const SET_TOKEN = 'login/SET_TOKEN'

export const LoginSinac = {
    namespaced: true,
    state: {
        token: '',
    },
    actions: {
        signIn: ( { commit }, payload ) => {
            commit(SET_TOKEN, payload)
        },
    },
    mutations: {
        [SET_TOKEN] (state, payload) {
            localStorage.token = payload
            state.token = payload
        },
    },
    getters: {
        isUserConnected: (state) => {
            return state.token ? true : false
        }
    }
}