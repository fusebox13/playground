import { expect } from 'chai';
import sinon from 'sinon';
import Vue from 'vue';
import Vuex from 'vuex';
import { mount } from '@vue/test-utils';
import Testing from '@/components/Testing';
import Element from 'element-ui';
import { resolve } from 'dns';
Vue.use(Element);

let subject;
const stubAction = sinon.stub();

//let stubAction = sinon.stub(store, 'ASYNC_DEMO/GET_PHOTOS');

async function mountComponent() {


  const mockAsyncDemo = {
    namespaced: true,
    actions: {
      GET_PHOTOS: stubAction,
    }
  }
  const store = new Vuex.Store({
    state: {},
    modules: {
      ASYNC_DEMO: mockAsyncDemo
    }
  })

  subject = mount(Testing, {
    store: store
  });
}

describe.only('vuex test', () => {
  it('should do stuff', async () => {
    await mountComponent()
      .then(Vue.nextTick())
      .then(() => {
        expect(stubAction.called).to.be.true;
      })
  });
});
