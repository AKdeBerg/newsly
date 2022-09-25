import { actionTypes } from "../actions/actions";

const initialState = {
  topStoriesWorld: [],
};

function worldReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_WORLD_DATA_SUCCESS:
      return {
        ...state,
        topStoriesWorld: action.payload.data,
      };

    default:
      return state;
  }
}

export default worldReducer;
