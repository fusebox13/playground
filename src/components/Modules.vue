<template>
    <div id="modules">
        <p>Vuex modules allow us to break up our state tree into smaller, more easily maintainable parts.  Each module is locally scoped and can be namespaced.</p>
        <hr/>
        <h5>MODULE DEMONSTRATOR 5000: </h5>
        <div class="demo-box">
            <i id="bonus-button" @click="showBonus" :class="!bonus?'el-icon-star-off':'el-icon-star-on'"></i>
            <div v-if="!bonus">
                <h5>Where's Waldo?</h5>
                <div class="center-content">
                    <img height="200" :src="WALDO"/>
                    <p>{{LABEL}}</p>
                </div>
            </div>

            <div v-if="bonus">
                <el-select v-model="selectedNamespace" @change="resetPunchline" placeholder="Select">
                    <el-option
                    v-for="namespace in namespaces"
                    :key="namespace"
                    :label="namespace"
                    :value="namespace">
                    </el-option>
                </el-select>
                <div>
                    <p>Namespace: <span class="amazing-blue">{{vuex('NAMESPACE')}}</span></p>
                    <p><span>{{vuex('DAD_JOKE')}}</span></p>
                    <p style="text-align: right"><span class="punchline" v-if="showPunchLine">{{vuex('DAD_PUNCHLINE')}}</span></p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash';

export default {
  name: "Modules",
  data() {
      return {
          selectedNamespace: 'APP/',
          namespaces: Array,
          showPunchLine: false,
          bonus: false
      }
  },
  computed: {
      ...mapState('APP/',['WALDO', 'LABEL']),
      //...mapState('APP/MODULE_A/',['WALDO', 'LABEL']),
      //...mapState('APP/MODULE_A/SUB_MODULE_A',['WALDO', 'LABEL']),
      //...mapState('APP/MODULE_B/',['WALDO', 'LABEL']),
   
  },
  methods: {
    vuex(varname) {
        const NAMESPACE = this.selectedNamespace.replace(/[//]/g, '.') + varname;
        return _.get(this.$store.state, NAMESPACE);
    },
    getVuexNamespaces(){
        this.namespaces = Object.keys(this.$store._modulesNamespaceMap);
    },
    resetPunchline() {
        this.hidePunchline();
        this.showPunchline();
    },
    hidePunchline() {
        this.showPunchLine = false;
    },
    showPunchline(){
        var self = this;
        setTimeout(() =>{
            self.showPunchLine = true;
        }, 5000);
    },
    showBonus() {
        this.bonus = !this.bonus;
    }
  },
  created() {
    this.getVuexNamespaces();
    this.showPunchline();
  },
}
</script>

<style scoped lang="scss">
    #modules {
        font-size: 0.75em;

        h5 {
            margin-bottom: 0px;
        }
    }
    .demo-box {
        position: relative;
        padding: 1em;
        border: 1px solid lightgrey;

        p {
            font-size: 18px;
        }
    }
    .amazing-blue {
        color: #409eff;
    }
    .punchline {
        color: #409eff;
    }
    .center-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #bonus-button {
        position: absolute;
        top: 0px;
        right: 0px;
        margin-right: 20px;
        margin-top: 20px;
        color: gold;
    }
    #bonus-button:hover {
        position: absolute;
        top: 0px;
        right: 0px;
        margin-right: 20px;
        margin-top: 20px;
        color:gold;
    }
</style>
