import { expect } from "chai";
import { mutations } from '@/mutations';

// destructure assign `mutations`
const { INCREMENT_MUTATION, DECREMENT_MUTATION } = mutations

describe.only('mutations', () => {
  it('INCREMENTS', () => {
    // mock state
    const state = { COUNT: 0 }
    // apply mutation
    INCREMENT_MUTATION(state)
    // assert result
    expect(state.COUNT).to.equal(1)
  });

  it('DECREMENTS', () => {
      // mock state
      const state = { COUNT: 1 }
      // apply mutation
      DECREMENT_MUTATION(state)
      // assert result
      expect(state.COUNT).to.equal(0)
   });


})