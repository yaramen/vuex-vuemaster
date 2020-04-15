import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "./services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events: [],
        count: 0,
        perPage: 3,
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
        },
        SET_EVENTS(state, events) {
            state.events = events;
        },
        SET_COUNT(state, count) {
            state.count = count;
        }
    },
    actions: {
        createEvent({commit}, event) {
            return EventService.postEvent(event).then(() => {
                commit('ADD_EVENT', event)
            })
        },
        fetchEvents({commit}, {perPage, page}) {
            EventService.getEvents(perPage, page)
                .then((res) => {
                    const count = res.headers['x-total-count'];
                    console.log(count);
                    commit('SET_COUNT', count);
                    commit('SET_EVENTS', res.data);
                })
                .catch(error => {
                    console.log('There was an error: ', error.response)
                })
        },
    }
})
