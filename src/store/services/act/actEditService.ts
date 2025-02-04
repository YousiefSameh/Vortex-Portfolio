import { createAsyncThunk } from "@reduxjs/toolkit";
import { createErrorMessage } from "@utils/createErrorMessage";
import api from "@services/api";
import { IServices } from "@customTypes/services.types";

const actEditService = createAsyncThunk("services/editService", async (serviceData: IServices, { rejectWithValue }) => {
  try {
    const response = await api.put(`/services/${serviceData._id}` ,serviceData);
    return response.data;
  } catch (error) {
    return rejectWithValue(createErrorMessage(error));
  }
})

export default actEditService;