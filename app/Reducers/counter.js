const initialState = {
  counters: []
};
let index = 0;
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
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
    case "DECREMENT":
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
    case "ADD_COUNTER":
      state = {
        ...state,
        counters: [...state.counters, { value: 0, id: index++ }]
      };
      break;
    case "REMOVE_COUNTER":
      state = {
        ...state,
        counters: [
          ...state.counters.slice(0, action.id),
          ...state.counters.slice(action.id + 1)
        ]
      };
      break;
  }
  return state;
};

export default counter;
