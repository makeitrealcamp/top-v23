import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import jobReducer from "../features/job/jobSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    job: jobReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
