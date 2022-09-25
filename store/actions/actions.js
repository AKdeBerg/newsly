export const actionTypes = {
  GET_HOME_TOP: "GET_HOME_TOP",
  GET_US_TOP: "GET_US_TOP",
  GET_WORLD_TOP: "GET_WORLD_TOP",
  GET_SCIENCE_TOP: "GET_SCIENCE_TOP",
  GET_ARTS_TOP: "GET_ARTS_TOP",
  LOAD_HOME_DATA_SUCCESS: "LOAD_HOME_DATA_SUCCESS",
  LOAD_US_DATA_SUCCESS: "LOAD_US_DATA_SUCCESS",
  LOAD_WORLD_DATA_SUCCESS: "LOAD_WORLD_DATA_SUCCESS",
  LOAD_SCIENCE_DATA_SUCCESS: "LOAD_SCIENCE_DATA_SUCCESS",
  LOAD_ARTS_DATA_SUCCESS: "LOAD_ARTS_DATA_SUCCESS",
  FAILURE: "FAILURE",
};

export function getHomeTop() {
  return { type: actionTypes.GET_HOME_TOP };
}
export function getUSTop() {
  return { type: actionTypes.GET_US_TOP };
}
export function getWorldTop() {
  return { type: actionTypes.GET_WORLD_TOP };
}
export function getScienceTop() {
  return { type: actionTypes.GET_SCIENCE_TOP };
}
export function getArtsTop() {
  return { type: actionTypes.GET_ARTS_TOP };
}

export function loadHomeDataSuccess(data) {
  return {
    type: actionTypes.LOAD_HOME_DATA_SUCCESS,
    payload: { data },
  };
}

export function loadUSDataSuccess(data) {
  return {
    type: actionTypes.LOAD_US_DATA_SUCCESS,
    payload: { data },
  };
}
export function loadWorldDataSuccess(data) {
  return {
    type: actionTypes.LOAD_WORLD_DATA_SUCCESS,
    payload: { data },
  };
}
export function loadScienceDataSuccess(data) {
  return {
    type: actionTypes.LOAD_SCIENCE_DATA_SUCCESS,
    payload: { data },
  };
}
export function loadArtsDataSuccess(data) {
  return {
    type: actionTypes.LOAD_ARTS_DATA_SUCCESS,
    payload: { data },
  };
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}
