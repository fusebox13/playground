import { expect } from "chai";
import sinon from "sinon";
import Vue from "vue";
import { shallow, mount } from "@vue/test-utils";
import CounterButton from "@/components/CounterButton.vue";

let subject;
async function mountComponent() {

  subject = mount(CounterButton, {
    propsData: {
        btnText: "Click Me"
    },
  });
}

beforeEach(() => {
  mountComponent();
})

describe("CounterButton.vue", () => {
  it("renders the button text from the props", async () => {
    await mountComponent().then(() => {
        expect(subject.text()).to.contain("Click Me");
    });
  });

  it("increments a counter when clicked", async () => {
    await mountComponent().then(() => {
        subject.find('button').trigger('click');
        expect(subject.emittedByOrder('blah').map(e => e.args)[0]).contain(12);
        expect(subject.find('span').text()).to.contain("2");
    });
  });


});