import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const fetchGreetings = createAsyncThunk(
  'greetings/fetchByIdStatus', async () => {
    const response = await axios.get('/api/v1/greetings')
    const { greetings } = await response.json;
    return greetings;
  }
)


// Then, handle actions in your reducers:
const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: "",
    loading: false,
    error: false,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: () => {
    // Add reducers for additional action types here, and handle loading state as needed
   (fetchGreetings.fulfilled, (state, action) => {
      // Add user to the state array
      const newState = {
       ...state, greeting: action.payload
      }
      return newState;
    });
  },
})

// Later, export the greetingSlice
export default greetingSlice.reducer;
