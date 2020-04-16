<template>
    <div>
        <h1>Events for {{ user.name }}</h1>
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
        <template v-if="page !== 1">
            <router-link :to="{ name: 'event-list', query: { page: page - 1}}" rel="prev">Prev Page</router-link>
        </template>
        <template v-if="page !== countPage">
            <router-link :to="{ name: 'event-list', query: { page: page + 1}}" rel="prev">Next Page</router-link>
        </template>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import EventCard from '@/components/EventCard.vue';

    export default {
        components: {
            EventCard
        },
        computed: {
            ...mapState({
                events: state => state.event.events,
                count: state => state.event.count,
                perPage: state => state.event.perPage,
                user: 'user'
            }),
            page() {
                return parseInt(this.$route.query.page) || 1;
            },
            countPage() {
                return Math.ceil(this.count / this.perPage);
            }
        },
        created() {
            this.$store.dispatch('event/fetchEvents', {
                perPage: this.perPage,
                page: this.page
            })
        }
    };
</script>
