import EventService from "../../services/EventService";
import notification from "./notification";

export default {
    namespaced: true,
    state: {
        events: [],
        event: {},
        count: 0,
        perPage: 3,
    },
    getters: {
        getEventById: state => id => {
            return state.events.find(event => event.id === id)
        }
    },
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event)
        },
        SET_EVENTS(state, events) {
            state.events = events;
        },
        SET_COUNT(state, count) {
            state.count = count;
        },
        SET_EVENT(state, event) {
            state.event = event;
        }
    },
    actions: {
        createEvent({commit, dispatch, rootState}, event) {
            console.log('User ' + rootState.user.name);
            //dispatch('actionToCall');
            //dispatch('moduleA/actionToCall', payload, {root: true});

            return EventService.postEvent(event).then(() => {
                commit('ADD_EVENT', event)
                const notification = {
                    type: 'success',
                    message: 'Your event has been created!'
                };
                dispatch('notification/add', notification, {root: true});
            })
        },
        fetchEvents({commit, dispatch}, {perPage, page}) {
            EventService.getEvents(perPage, page)
                .then((res) => {
                    const count = res.headers['x-total-count'];
                    commit('SET_COUNT', count);
                    commit('SET_EVENTS', res.data);
                })
                .catch(error => {
                    const notification = {
                        type: 'error',
                        message: 'There was a problem fetching events: ' + error.message
                    };
                    dispatch('notification/add', notification, {root: true});
                })
        },
        fetchEvent({commit, getters}, id) {
            const event = getters.getEventById(id);

            if (event) {
                commit('SET_EVENT', event);
            } else {
                EventService.getEvent(id)
                    .then(res => {
                        commit('SET_EVENT', res.data);
                    })
                    .catch(error => {
                        const notification = {
                            type: 'error',
                            message: 'There was a problem fetching events: ' + error.message
                        };
                        dispatch('notification/add', notification, {root: true});
                    })

            }
        }
    },
}