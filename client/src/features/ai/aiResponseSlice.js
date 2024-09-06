import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aiResponse: null,
};

const aiResponseSlice = createSlice({
  name: "aiResponse",
  initialState,
  reducers: {
    setAiResponse: (state, action) => {
      state.aiResponse = action.payload;
    },
    addAiResponse: (state, action) => {
      state.aiResponse = action.payload;
    },
    clearAIResponse: (state) => {
      state.aiResponse = "";
    },
  },
});

export const { setAiResponse, addAiResponse, clearAIResponse } =
  aiResponseSlice.actions;

export default aiResponseSlice.reducer;
