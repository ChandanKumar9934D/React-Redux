const redux = require("redux");
const INITIAL_VAL = {
  value: 0,
};
console.log("start");

const reducer = (store = INITIAL_VAL, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = {
      value: store.value + 1,
    };
  } else if (action.type === "DECRESE") {
    newStore = {
      value: store.value - 1,
    };
  } else if (action.type === "ADDITION") {
    newStore = {
      value: store.value +action.payload.number,
    };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber1 = () => {
  const state = store.getState();

  console.log(state);
};
store.subscribe(subscriber1);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECRESE" });
store.dispatch({
  type: "ADDITION",
  payload: {
    number: 7,
  },
});
