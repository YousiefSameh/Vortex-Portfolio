import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteService } from "@services/services.services";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";

export const actDeleteService = createAsyncThunk(
  "services/deleteService",
  async (serviceId: string, { rejectWithValue }) => {
    try {
      await deleteService(serviceId);
      return serviceId;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);