<template>
  <div class="home">
      <i @click="onVisibilityIconClicked" :class="[visibilityButton.iconClass, { active: BULLET_POINTS_VISIBLE }]"></i>
      <h3>Advanced Vuex - Topics:</h3>
    <div class="split-container">
      <div class="left" v-if="BULLET_POINTS_VISIBLE">
        <ul>
          <li>Modules</li>
          <li>Reactivity</li>
          <li>Testing</li>
          <li>Asynchronous Actions</li>
        </ul>
      </div>
    </div>
    <el-tabs v-if="!BULLET_POINTS_VISIBLE" v-model="activeTabPane" @tab-click="onTabClicked">
      <el-tab-pane class="tab-pane" :label="tabs.ModulesTab.label" :name="tabs.ModulesTab.name">
        <Modules/>
      </el-tab-pane>
      <el-tab-pane class="tab-pane" :label="tabs.VbindTab.label" :name="tabs.VbindTab.name">
        <VModel/>
      </el-tab-pane>
      <el-tab-pane class="tab-pane" :label="tabs.TestingTab.label" :name="tabs.TestingTab.name">
        <Testing/>
      </el-tab-pane>
      <el-tab-pane class="tab-pane" :label="tabs.AsyncTab.label" :name="tabs.AsyncTab.name">
        <AsyncActions/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Modules from '@/components/Modules';
import VModel from '@/components/VModel';
import Testing from '@/components/Testing'
import AsyncActions from '@/components/AsyncActions'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import axios from 'axios';

export default {
  name: "home",
  components: {
    Modules,
    Testing,
    AsyncActions,
    VModel
  },
  data: function() {
    return {
      visibilityButton: {
        hideBulletPoints: false,
        iconClass: 'el-icon-view',
        activeClass: 'el-icon-view-active'
      },
      tabs: {
        ModulesTab: { key: 1, label: 'Modules', name: 'Modules' },
        VbindTab: { key: 2, label: 'Reactivity', name: 'VModel' },
        TestingTab: { key: 3, label: 'Testing', name: 'Testing' },
        AsyncTab: { key: 4, label: 'Asychronous Actions', name: 'AsyncActions' },
      }
    }
  },
  computed: {
    activeTabPane: {
      get() {
        return this.$store.state.ACTIVE_TAB;
      },
      set(value) {
        this.$store.commit('UPDATE_ACTIVE_TAB', value)
      }
    },
    getModuleATitle() {
      return this.$store.state.APP.MODULE_A.NAMESPACE;
    },
    getModuleBTitle() {
      return this.$store.state.APP.MODULE_B.NAMESPACE;
    },
    ...mapState(['NAMESPACE', 'BULLET_POINTS_VISIBLE'])
  },
  methods: {
    onTabClicked() {
    },
    onVisibilityIconClicked() {
      this.visibilityButton.hideBulletPoints = !this.visibilityButton.hideBulletPoints;
      this.TOGGLE_BULLET_POINTS();
      this.visibilityButton.activeClass = this.visibilityButton.hideBulletPoints ? 'el-icon-view-not-active' : 'el-icon-view-active';
    },
    ...mapMutations(['STORE']),
    ...mapActions(['TOGGLE_BULLET_POINTS'])
  },
  created() {
    this.STORE({
      dynamic: 'totally dynamic',
      json: 'not jason',
      wow: 'much wow!'
    });
  }
};
</script>
<style scoped lang="scss">
  .split-container {
    display: flex;

  }

  .el-icon-view.active {
    color: black;
  }

  .el-icon-view {
    color: lightgrey;
    position: fixed;
    top: 40px;
    right: 40px;
  }

  .el-tabs__item {
      font-size: 21px !important;
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
