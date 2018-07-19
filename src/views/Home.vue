<template>
  <div class="home">
    <h1>Welcome to Fuseworks Laboratory</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <el-button type="primary" @click="increment">{{CLICK_ME}}</el-button>
    <h1>{{COUNT}}</h1>

  </div>
</template>

<script>
import TabbedModal from "@/components/TabbedModal.vue";
import TabbedModalTemplate from "@/components/ftt.js";
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  name: "home",
  components: {
    TabbedModal
  },
  data: function() {
    return {
      tabs: TabbedModalTemplate.template
    }
  },
  computed: {
  ...mapState(['CLICK', 'COUNT']),
  ...mapGetters(['CLICK_ME'])
  },
  methods: {
    increment: function() {
        this.INCREMENT_ACTION();
    },
    ...mapActions(['INCREMENT_ACTION']),
    ...mapMutations(['INCREMENT_MUTATION'])
  }
};
</script>
