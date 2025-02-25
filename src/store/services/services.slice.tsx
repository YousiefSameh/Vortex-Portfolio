import { createSlice } from "@reduxjs/toolkit";
import { IServices, isString, TLoading } from "@customTypes/index";
import actGetServices from "./act/actGetServices";
import actAddService from "./act/actAddService";
import { actDeleteService } from "./act/actDeleteService";
import actEditService from "./act/actEditService";

interface ServicesState {
	services: IServices[];
	loading: TLoading;
	error: string | null;
}

const initialState: ServicesState = {
	services: [],
	loading: "idle",
	error: null,
};

const servicesSlice = createSlice({
	name: "services",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Get Services
		builder.
		addCase(actGetServices.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		})
		.addCase(actGetServices.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.services = action.payload;
		})
		.addCase(actGetServices.rejected, (state, action) => {
			state.loading = "failed";
			if (isString(action.payload)) {
				state.error = action.payload;
			}
		})
		// Add Service
		builder
		.addCase(actAddService.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		})
		.addCase(actAddService.fulfilled, (state, action) => {
			state.loading = "succeeded";
			if (action.payload._id) {
				state.services.push(action.payload as unknown as IServices);
			}
		})
		.addCase(actAddService.rejected, (state, action) => {
			state.loading = "failed";
			if (isString(action.payload)) {
				state.error = action.payload;
			}
		})
		// Edit Service
		builder
		.addCase(actEditService.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		})
		.addCase(actEditService.fulfilled, (state, action) => {
			state.loading = "succeeded";
			const index = state.services.findIndex((service) => service._id === action.payload._id);
			if (index !== -1) {
				state.services[index] = action.payload;
			}
		})
		.addCase(actEditService.rejected, (state, action) => {
			state.loading = "failed";
			if (isString(action.payload)) {
				state.error = action.payload;
			}
		})
		// Delete Service
		builder
		.addCase(actDeleteService.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		})
		.addCase(actDeleteService.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.services = state.services.filter((service) => service._id !== action.payload);
		})
		.addCase(actDeleteService.rejected, (state, action) => {
			state.loading = "failed";
			if (isString(action.payload)) {
				state.error = action.payload;
			}
		});
	}
});

export default servicesSlice.reducer;