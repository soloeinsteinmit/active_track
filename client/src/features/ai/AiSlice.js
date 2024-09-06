import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HfInference } from "@huggingface/inference";

// Initialize HfInference with your API key
const inference = new HfInference("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"); // Replace with your actual API key

// Async Thunk to fetch AI response from Hugging Face
export const fetchAIResponse = createAsyncThunk(
  "ai/fetchAIResponse",
  async (inputMessage, { rejectWithValue }) => {
    try {
      // Prepend fitness-specific context to the user's message
      const contextMessage =
        "You are a fitness trainer. Provide answers related to fitness training only.";
      const fullMessage = `${contextMessage}\nUser: ${inputMessage}`;

      let response = "";
      for await (const chunk of inference.chatCompletionStream({
        model: "microsoft/DialoGPT-medium",
        messages: [
          { role: "system", content: contextMessage },
          { role: "user", content: inputMessage },
        ],
        max_tokens: 500,
      })) {
        response += chunk.choices[0]?.delta?.content || "";
      }
      return response.trim(); // Trim any leading or trailing whitespace
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch response");
    }
  }
);

const initialState = {
  aiResponses: [],
  status: "idle",
  error: null,
};

const AiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    clearAIMessages: (state) => {
      state.aiResponses = [];
    },
    markResponsesAsOld: (state) => {
      state.aiResponses.forEach((response) => (response.isNew = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIResponse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAIResponse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.aiResponses.push({ text: action.payload, isNew: true });
      })
      .addCase(fetchAIResponse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message || null;
      });
  },
});

export const { clearAIMessages, markResponsesAsOld } = AiSlice.actions;
export default AiSlice.reducer;
