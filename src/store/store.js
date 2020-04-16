import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "./../services/EventService";
import user from './modules/user';
import event from './modules/event';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
    },
    modules: {
        user,
        event,
        notification
    }
})
