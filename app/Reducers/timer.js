const initialState = {
  timer: 0
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT1":
      state = { ...state, timer: state.timer + 1 };
    case "DECREMENT1":
      state = { ...state, timer: state.timer - 1 };
  }
  return state;
};

export default timer;
