import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import usReducer from "./usReducer";
import scienceReducer from "./scienceReducer";
import artReducer from "./artReducer";
import worldReducer from "./worldReducer";

export default combineReducers({
  home: homeReducer,
  us: usReducer,
  world: worldReducer,
  science: scienceReducer,
  art: artReducer,
});
