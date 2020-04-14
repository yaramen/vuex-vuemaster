<template>
  <div>
    <h1>Create Event</h1>
    <div>
      User name: {{ userName }}<br>
      Categories:
      <ul>
        <li v-for="category in categories">{{category}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
      computed: {
          ...mapState({
              userName: state => state.user.name,
              categories: 'categories', //эквивалентно state => state.categories.
          })
      }
  }
</script>