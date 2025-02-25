import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";
import { fetchServices } from "@services/services.services";

const actGetServices = createAsyncThunk("services/getServices", async (_, { rejectWithValue }) => {
  try {
    const res = await fetchServices();
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetServices;