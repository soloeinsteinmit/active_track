import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for login and fetching user data
export const userVitals = createAsyncThunk(
  "user/vitals",
  async ({ userId }) => {
    console.log("user id", userId);
    try {
      const response = await axios.get(
        `http://localhost:1111/api/vitals/${userId}`
      );

      console.log("user vitals", response.data);
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

const vitalsSlice = createSlice({
  name: "user",
  initialState: {
    vitalsInfo: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userVitals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userVitals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vitalsInfo = action.payload;
      })
      .addCase(userVitals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default vitalsSlice.reducer;
