<template>
    <h1 class="counter">{{DOUBLED_COUNT}}</h1>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "DoubleCount",
    computed: {
       ...mapGetters(['DOUBLED_COUNT'])
    },
};
</script>
<style scoped>
  .counter {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
  }
</style>
