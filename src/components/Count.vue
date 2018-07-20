<template>
    <h1 class="counter">{{COUNT}}</h1>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Count",
    computed: {
       ...mapState(['COUNT'])
    },
};
</script>
<style scoped>
  .counter {
    text-align: center;
    margin-bottom: 0px;
    margin-top: 0.25em;
  }
</style>
