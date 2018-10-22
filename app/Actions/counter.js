import types from "../Types/counter";

const actions = {
  addCounter: () => ({ type: types.ADD_COUNTER }),
  removeCounter: index => ({ type: types.REMOVE_COUNTER, index }),
  increment: id => ({ type: types.INCREMENT, id }),
  decrement: id => ({ type: types.DECREMENT, id })
};

export default actions;
