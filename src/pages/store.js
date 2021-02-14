import HomeServices from './services'

const SET_QUICK_ACCESS_BUTTONS = 'home/SET_QUICK_ACCESS_BUTTONS'

export const HomeStore = {
    namespaced: true,
    state: {
        'quickAccessButtons': []
    },
    actions: {
        getQuickAccessButtons: async ( {commit} ) => {
            console.log("getQuickAccessButtons");
            const response = await HomeServices.getQuickAccessButtons()
            //console.log(response)
            commit(SET_QUICK_ACCESS_BUTTONS, response.data.quickButtons)
        }
    },
    mutations: {
        [SET_QUICK_ACCESS_BUTTONS] (state, payload) {
            state.quickAccessButtons = payload
        }
    }
}