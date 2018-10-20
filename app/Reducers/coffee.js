const initialState = {
  outlets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "OUTLET_FETCH_SUCCEEDED":
      console.log(action.outlets);
      return { ...state, outlets: action.outlets };

    default:
      return state;
  }
};
