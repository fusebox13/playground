import { expect } from "chai";
import sinon from "sinon";
import Vue from "vue";
import { shallow, mount } from "@vue/test-utils";
import TabbedModal from "@/components/TabbedModal.vue";
import TabbedModalTemplate from "@/components/ftt.js";
import Element from 'element-ui';
import {Tabs, TabPane} from 'element-ui';
Vue.use(Element);


let subject;
const onTabClicked = sinon.stub();
async function mountComponent() {

  subject = mount(TabbedModal, {
    propsData: {
        tabs: TabbedModalTemplate.template,
        visible: true
    },
    methods: {
        onTabClicked: onTabClicked
    }
  });
}

beforeEach(() => {
  mountComponent();
})

describe("CounterButton.vue", () => {
  it("successfully loads the component", async () => {
    await mountComponent().then(() => {
        expect(subject.html()).to.contain("Title");
    });
  });

  it("loads with user as the active tab", async () => {
    await mountComponent().then(() => {
        const button = subject.find("[data-qa=tab-button]");
        expect(button.text()).to.contain("User");
    });
  });

  it("switches tab content when a tab is clicked", async () => {
    await mountComponent().then(() => {
        //Given
        const tabs = subject.find(Tabs);
        const tabPanes = tabs.findAll('.el-tabs__item');
        
        //When
        tabPanes.at(2).trigger('click');

        //Then
        expect(onTabClicked.called).to.equal(true);
        expect(subject.vm.activeName).to.equal("Role");
        
    });
  });
});