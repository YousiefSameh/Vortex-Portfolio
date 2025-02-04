import { createSlice } from "@reduxjs/toolkit";
import { IServices, TLoading } from "@customTypes/index";
import actGetServices from "./act/actGetServices";
import { isString } from "@tsparticles/engine";
import actAddService from "./act/actAddService";
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
		builder
		.addCase(actGetServices.pending, (state) => {
			state.loading = "pending";
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
		builder
		.addCase(actAddService.pending, (state) => {
			state.loading = "pending";
		})
		.addCase(actAddService.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.services.push(action.payload);
		})
		.addCase(actAddService.rejected, (state, action) => {
			state.loading = "failed";
			if (isString(action.payload)) {
				state.error = action.payload;
			}
		})
		builder
		.addCase(actEditService.pending, (state) => {
			state.loading = "pending";
		})
		.addCase(actEditService.fulfilled, (state, action) => {
			state.loading = "succeeded";
			const index = state.services.findIndex(service => service._id === action.payload._id);
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
	}
});

export default servicesSlice.reducer;
