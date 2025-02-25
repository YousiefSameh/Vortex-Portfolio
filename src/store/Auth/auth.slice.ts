// src/store/auth/auth.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import actSignup from "./act/actSignup";
import actLogin from "./act/actLogin";
import { isString } from "@tsparticles/engine";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // تسجيل الدخول
    builder.addCase(actLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(actLogin.rejected, (state, action) => {
      state.loading = false;
      if(isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // التسجيل
    builder.addCase(actSignup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actSignup.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(actSignup.rejected, (state, action) => {
      state.loading = false;
      if(isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;