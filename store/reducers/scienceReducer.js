import { actionTypes } from "../actions/actions";

const initialState = {
  topStoriesScience: [],
};

function scienceReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_SCIENCE_DATA_SUCCESS:
      return {
        ...state,
        topStoriesScience: action.payload.data,
      };

    default:
      return state;
  }
}

export default scienceReducer;
