<template>
  <div class="home">
    <h1>Welcome!</h1>
    <h3>Today we will be learning about Vuex!</h3>
    <div class="split-container">
      <div class="left">
        <ul>
          <li>State</li>
          <li>Getters</li>
          <li>Mutations</li>
          <li>Actions</li>
          <li>The MapState Helper</li>
        </ul>
      </div>
      <div class="right">
        <Count/>
        <el-button type="primary" @click="increment">+</el-button>
        <el-button type="primary" @click="decrement">-</el-button>
        <DoubleCount/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import DoubleCount from "@/components/DoubleCount.vue"
export default {
  name: "home",
  components: {
    DoubleCount
  },
  data: function() {
    return {}
  },
  computed: {
    ...mapState(['COUNT']),
    ...mapGetters(['DOUBLED_COUNT'])
  },
  methods: {
    increment: function() {
      //this.$store.commit("INCREMENT_MUTATION");
      //or
      //or
      //this.$store.dispatch("INCREMENT_ACTION");
      this.INCREMENT_ACTION();
    },
    decrement: function() {
      //this.$store.commit("DECREMENT_MUTATION", 2);
      //or
      //this.$store.dispatch('DECREMENT_ACTION', 2);
      //or
      //this.DECREMENT_ACTION(2);
    },
    ...mapActions(['INCREMENT_ACTION', 'DECREMENT_ACTION']),
    ...mapMutations(['INCREMENT_MUTATION'])
  }
};
</script>
<style scoped>
  .split-container {
    display: flex;

  }
  .right {
    padding-left: 2em;
    padding-right: 2em;
    margin-left: 3em;
    margin-top: 1em;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  }
</style>
