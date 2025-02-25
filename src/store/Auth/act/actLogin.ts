import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";
import API from "@services/api.services";

interface LoginData {
	email: string;
	password: string;
}

const actLogin = createAsyncThunk(
	"auth/login",
	async (credentials: LoginData, { rejectWithValue }) => {
		try {
			const response = await API.post(`/v1/auth/login`, credentials);
			return response.data;
		} catch (error) {
			return rejectWithValue(axiosErrorHandler(error));
		}
	}
);

export default actLogin;