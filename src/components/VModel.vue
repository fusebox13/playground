<template>
    <div id="vbind">
        <p>Two way databinding between the Vuex store and form elements via the <span class="amazing-blue">v-model</span> directive is possible.  It requires a special computed in order to make the form element reactive.</p>
        <hr/>
        <el-input placeholder="Type Something" v-model="INPUT"></el-input>
        {{INPUT}}
    </div>
</template>

<script>
export default {
  name: "VModel",
  data() {
      return {
          input: ""
      }
  },
  computed: {
      INPUT: {
          get() {
              return this.$store.state.INPUT;
          },
          set(value) {
              this.$store.commit('UPDATE_INPUT', value);
          }
      }
  }
}
</script>

<style scoped lang="scss">
    #vbind {
        font-size: 0.75em;
    }
    .amazing-blue {
        color: #409eff;
    }
</style>
