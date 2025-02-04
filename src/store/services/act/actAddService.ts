import { createAsyncThunk } from "@reduxjs/toolkit";
import { createErrorMessage } from "@utils/createErrorMessage";
import { IServices } from "@customTypes/services.types";
import api from "@services/api";

type TResponse = IServices;

const actAddService = createAsyncThunk(
	"services/addService",
	async (serviceData: FormData, { rejectWithValue }) => {
		try {
			const response = await api.post<TResponse>("/services", serviceData);
			return response.data;
		} catch (error) {
			return rejectWithValue(createErrorMessage(error));
		}
	}
);

export default actAddService;
