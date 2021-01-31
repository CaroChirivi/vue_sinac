//export const SET_TOKEN = 'login/SET_TOKEN'

export const LogoutSinac = {
    namespaced: true,
    state: {
        token: '',
    },
    actions: {
        signOut: ( { commit}, payload) => {
            commit(SET_TOKEN, payload)
            localStorage.removeItem(token)
            state.token = payload
        }
    },
    mutations: {
        [SET_TOKEN] (state, payload) {
            localStorage.token = payload
            state.token = payload
        },
    },
}