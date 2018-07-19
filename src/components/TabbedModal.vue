<template>
    <div>
        <el-dialog
            title="Title"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="onDialogClose">
            <el-tabs v-model="activeName" @tab-click="onTabClicked">
                <el-tab-pane v-for="tab in tabs" :key="tab.header" :label="tab.header" :name="tab.header">
                    <component v-bind="tab.component.props" :is="tab.component.name">{{tab.component.text}}</component>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "tabbed-modal",
    props: {
        visible: {
            type: Boolean,
            default: true
        },
        tabs: {
            type: Array,
            default: null
        }
    },
    data: () => {
        return {
            dialogVisible: null,
            activeName: 'first',
        }
    },
    methods: {
        onDialogClose(done) {
            this.dialogVisible = false;
            done();
        },
        onTabClicked(tab, event) {
        }
    },
    created: function() {
        this.activeName = this.tabs[0].header;
        this.dialogVisible = this.visible;
    }
 
};
</script>