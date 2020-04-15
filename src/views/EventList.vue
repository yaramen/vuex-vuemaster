<template>
    <div>
        <h1>Events Listing</h1>
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
            ...mapState(['events', 'count', 'perPage']),
            page() {
                return parseInt(this.$route.query.page) || 1;
            },
            countPage() {
                return Math.ceil(this.count / this.perPage);
            }
        },
        created() {
            this.$store.dispatch('fetchEvents', {
                perPage: this.perPage,
                page: this.page
            })
        }
    };
</script>
