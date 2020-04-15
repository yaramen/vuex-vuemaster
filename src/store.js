import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
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
    mutations: {
        INCREMENT_COUNT(state, count) {
            if(count) {
                state.count += count;
            } else {
                state.count++;
            }
        }

    },
    actions: {
        updateCount({state, commit}, incrementBy) {
            if(state.user) {
                commit('INCREMENT_COUNT', incrementBy);
            }
        }
    }
})
