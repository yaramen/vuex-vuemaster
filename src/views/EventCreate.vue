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
    <div>
      Counter: {{ count }}
      <button @click="incrementCount">Increment</button>

      <input type="number" v-model.number="incrementBy" />
      <button @click="incrementCountBy">Increment!!!!</button>
      <button @click="incrementCountAction">Increment Action!!!!</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
      data() {
          return {
              incrementBy: 1
          }
      },
      computed: {
          ...mapState({
              userName: state => state.user.name,
              categories: 'categories',
              count: 'count'
              //эквивалентно state => state.categories.
          }),
          ...mapGetters([
              'catLength',
          ]),
          ...mapGetters({
              msg: 'messageCategory'
          }),
      },
      methods: {
          incrementCount() {
              this.$store.commit('INCREMENT_COUNT');
          },
          incrementCountBy() {
              this.$store.commit('INCREMENT_COUNT', this.incrementBy);
          },
          incrementCountAction() {
              this.$store.dispatch('updateCount', this.incrementBy);
          }
      }
  }
</script>