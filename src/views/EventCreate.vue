<template>
  <div>
    <h1>Create Event</h1>
    <div>
      User name: {{ userName }}<br>
      Categories:({{catLength}})<br>
      <ul>
        <li v-for="category in categories">{{category}}</li>
      </ul>
      {{msg}}
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
      computed: {
          ...mapState({
              userName: state => state.user.name,
              categories: 'categories', //эквивалентно state => state.categories.
          }),
          ...mapGetters([
              'catLength',
          ]),
          ...mapGetters({
              msg: 'messageCategory'
          }),
      }
  }
</script>