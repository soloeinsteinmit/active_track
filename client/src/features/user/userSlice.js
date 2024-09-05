import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";
import { userVitals } from "./userVitals"; // Import the userVitals thunk

// Thunk for login and fetching user data
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, { dispatch }) => {
    // Hash the password
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    try {
      // Perform login request
      const loginResponse = await axios.post(
        "http://localhost:1111/api/login",
        {
          email,
          password_hash: hashedPassword,
        }
      );

      console.log("login response", loginResponse);

      if (loginResponse.status === 200) {
        const user = loginResponse.data.user;
        console.log("user data", user);

        // Dispatch userVitals after login is successful
        dispatch(userVitals({ userId: user.id }));

        // Return the user object
        return user;
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

// userSlice definition remains the same
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
