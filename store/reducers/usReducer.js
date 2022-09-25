import { actionTypes } from "../actions/actions";

const initialState = {
  topStoriesUS: [],
};

function usReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_US_DATA_SUCCESS:
      return {
        ...state,
        topStoriesUS: action.payload.data,
      };

    default:
      return state;
  }
}

export default usReducer;
