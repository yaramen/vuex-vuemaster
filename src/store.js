import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "./services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events: [],
        user: {
            id: '1',
            name: 'Mixa'
        },
        categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
    },
    getters: {},
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event)
        }
    },
    actions: {
        createEvent({commit}, event) {
            return EventService.postEvent(event).then(() => {
                commit('ADD_EVENT', event)
            })
        }
    }
})
