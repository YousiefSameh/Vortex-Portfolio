import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUseAddServices } from "@customTypes/services.types";
import { updateService } from "@services/services.services";

const actEditService = createAsyncThunk(
  "services/editService",
  async (service: IUseAddServices, { rejectWithValue }) => {
    try {
      const response = await updateService(service);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message || "Failed to update service");
      }
      return rejectWithValue("Failed to update service");
    }
  }
);

export default actEditService;