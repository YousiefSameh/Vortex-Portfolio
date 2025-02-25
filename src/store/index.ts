import { configureStore } from "@reduxjs/toolkit";
import services from "./services/services.slice";
import projects from "./projects/projects.slice";
import auth from "./Auth/auth.slice";

export const store = configureStore({
	reducer: { services, projects, auth },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
