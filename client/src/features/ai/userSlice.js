import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk function to simulate a login request
const loginUserAsync = createAsyncThunk(
    'user/loginUserAsync',
    async (credentials, thunkAPI) => {
        try {
            return credentials;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: "Guest",
        loading: false,
        error: null
    },
    reducers: {
        logoutUser: (state) => {
            state.value = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            });
    }
});

export { loginUserAsync };
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
