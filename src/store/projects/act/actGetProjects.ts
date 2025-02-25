import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";
import API from "@services/api.services";

interface PaginationParams {
  page: number;
  perPage?: number;
}

const actGetProjects = createAsyncThunk(
  "projects/getProjects",
  async ({ page }: PaginationParams, { rejectWithValue }) => {
    try {
      const res = await API.get("/v1/projects", {
        params: {
          page,
        },
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProjects;