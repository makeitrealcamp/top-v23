import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  joblist: [],
  job: {},
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {}
});

export default jobSlice.reducer;
