import { actionTypes } from '../actions/actions';

const initialState = {
  topStoriesHome: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_HOME_DATA_SUCCESS:
      return {
        ...state,
        topStoriesHome: action.payload.data,
      };

    default:
      return state;
  }
}

export default homeReducer;
