import { expect } from "chai";
import sinon from "sinon";
import { shallow, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

let subject;

async function mountComponent() {
  subject = mount(HelloWorld, {
    methods: {
      testMethod: sinon.stub().returns(12)
    }
  });
}

beforeEach(() => {
  mountComponent();
})

describe("HelloWorld.vue", async () => {
  it("renders props.msg when passed", async () => {
    await mountComponent().then(() => {
      const msg = "new message";
      subject.setProps({ msg: msg });
      expect(subject.text()).to.include(msg);
      console.log(subject.vm.testMethod);

    });
  });
});
