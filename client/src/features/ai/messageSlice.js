import { createSlice } from "@reduxjs/toolkit";

export const SET_PROMPT_TIME = "SET_PROMPT_TIME";

const initialState = {
  inputMessage: "",
  messages: [],
  promptTime: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.inputMessage = action.payload;
    },
    addMessage: (state, action) => {
      state.messages = [...(state.messages || []), action.payload];
      state.inputMessage = "";
    },
    clearMessages: (state) => {
      state.inputMessage = "";
      state.messages = [];
    },
  },
});

export const { setMessage, addMessage, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;
