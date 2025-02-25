import { TLoading } from "@customTypes/general";
import { IProject } from "@customTypes/projects.types";
import { createSlice } from "@reduxjs/toolkit";
import actGetProjects from "./act/actGetProjects";
import { isString } from "@customTypes/guards";

interface ProjectsState {
	projects: { data: IProject[] };
	loading: TLoading;
	error: string | null;
}

const initialState: ProjectsState = {
	projects: { data: [] },
	loading: "idle",
	error: null,
};

const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(actGetProjects.pending, (state) => {
				state.loading = "pending";
				state.error = null;
			})
			.addCase(actGetProjects.fulfilled, (state, action) => {
				state.loading = "succeeded";
				state.projects = action.payload;
			})
			.addCase(actGetProjects.rejected, (state, action) => {
				state.loading = "failed";
				if (isString(action.payload)) {
					state.error = action.payload;
				}
			});
	},
});

export default projectsSlice.reducer;
