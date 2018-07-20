const mutations = {
   INCREMENT_MUTATION: (state) => {
      state.COUNT++;
   },
   DECREMENT_MUTATION: (state, payload) => {
      state.COUNT-=payload;
   }
}

export { mutations }