import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";
import API from "@services/api.services";

interface SignupData {
  username: string;
  email: string;
  password: string;
}

const actSignup = createAsyncThunk(
  "auth/signup",
  async (userData: SignupData, { rejectWithValue }) => {
    try {
      const response = await API.post(`/v1/auth/signup`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actSignup;