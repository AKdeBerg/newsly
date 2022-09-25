import { actionTypes } from "../actions/actions";

const initialState = {
  topStoriesArts: [],
};

function artReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ARTS_DATA_SUCCESS:
      return {
        ...state,
        topStoriesArts: action.payload.data,
      };

    default:
      return state;
  }
}

export default artReducer;
