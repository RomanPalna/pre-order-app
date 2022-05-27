import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getToOrder } from "./toOrder-action";

const toOrder = createReducer([], {
  [getToOrder]: (state, action) => [...state, action.payload],
});

export default combineReducers({
  toOrder,
});
