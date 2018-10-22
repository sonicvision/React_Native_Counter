import types from "../Types/counter";

const initialState = {
  counters: []
};
let index = 0;
const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      state = {
        ...state,
        counters: state.counters.map(
          counter =>
            counter.id == action.id
              ? { value: counter.value + 1, id: action.id }
              : counter
        )
      };
      break;
    case types.DECREMENT:
      state = {
        ...state,
        counters: state.counters.map(
          counter =>
            counter.id == action.id
              ? { value: counter.value - 1, id: action.id }
              : counter
        )
      };
      break;
    case types.ADD_COUNTER:
      state = {
        ...state,
        counters: [...state.counters, { value: 0, id: index++ }]
      };
      break;
    case types.REMOVE_COUNTER:
      state = {
        ...state,
        counters: [
          ...state.counters.slice(0, action.index),
          ...state.counters.slice(action.index + 1)
        ]
      };
      break;
  }
  return state;
};

export default counter;
