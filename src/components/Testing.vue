<template>
    <div id="testing">
        <p>Testing a Vuex Store is fast and easy. There are some caveats, so lets take a look at some code.</p>
        <p class="small-font">Can we get an army of these monkeys to replace our E2E tests?</p>
        <hr/>
        <img width="500px" src="/img/testmonkey.jpg"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Testing",
  methods: {
      ...mapActions('ASYNC_DEMO', ['GET_PHOTOS'])
  },
  created() {
    this.GET_PHOTOS()
     
  }
}
</script>

<style scoped lang="scss">
    #testing {
        font-size: 0.75em;
    }
    .small-font {
        font-size: 0.75em;
    }
</style>
