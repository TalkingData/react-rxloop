import rxloop from '@rxloop/core';

export default function createStore(reducers, state) {
  const store = rxloop();
  store.model({
    name: 'test',
    state,
    reducers,
  });
  return store;
}
