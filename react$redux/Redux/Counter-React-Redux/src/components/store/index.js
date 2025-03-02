import { createStore } from "redux";
const INTIAL_VAL = {
  counter: 0,
  toggel:false
};
const reducer = (store = INTIAL_VAL, action) => {
  let newStore = store;
  if (action.type == "INCREMENT") {
    newStore = { ...store,counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    newStore = {...store, counter: store.counter - 1 };
  } else if (action.type == "PRIVCE") {
    newStore = { ...store,toggel:!store.toggel};
  } else if (action.type == "ADDITION") {
    newStore = { counter:store.counter+ action.payload.number };
  } else if (action.type == "SUBTRACT") {
    newStore = { ...store,counter:store.counter- action.payload.number };
    
  }

  return newStore;
};
const CounterStore = createStore(reducer);
export default CounterStore;
