import { createAsyncThunk } from "@reduxjs/toolkit";
import { createErrorMessage } from "@utils/createErrorMessage";
import { IServices } from "@customTypes/services.types";
import api from "@services/api";

type TResponse = IServices[];

const actGetServices = createAsyncThunk(
	"services/getServices",
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get<TResponse>("/services");
			return response.data;
		} catch (error: unknown) {
			return rejectWithValue(createErrorMessage(error));
		}
	}
);

export default actGetServices;
