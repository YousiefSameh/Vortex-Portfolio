import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";
import { addService } from "@services/services.services";
import { IUseAddServices } from "@customTypes/services.types";

const actAddService = createAsyncThunk(
	"services/addService",
	async (serviceData: IUseAddServices, { rejectWithValue }) => {
		try {
			const response = await addService(serviceData);
			return response;
		} catch (error) {
			return rejectWithValue(axiosErrorHandler(error));
		}
	}
);

export default actAddService;