import logger from "redux-logger";
import wellcomeReducer from "./wellcome/wellcome-reducer";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    wellcome: wellcomeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
