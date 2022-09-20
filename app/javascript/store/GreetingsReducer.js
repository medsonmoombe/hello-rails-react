import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGreetings = createAsyncThunk("fetchGreetings", async () => {
  const response = await fetch("/api/v1/greetings");
  const { greeting } = await response.json();
  return greeting;
});

export const greetingSlice = createSlice({
  name: "greetings",
  initialState: {
    greeting: "",
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        greeting: action.payload,
      };
      return newState;
    },
  },
});

export default greetingSlice.reducer;
