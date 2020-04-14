import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            id: '1',
            name: 'Mixa'
        },
        categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
    },
    getters: {
        catLength: state => {
            return state.categories.length
        },
        messageCategory: (state, getters) => {
            return 'Всего ' + getters.catLength + ' категорий';
        }
    },
    mutations: {},
    actions: {}
})
