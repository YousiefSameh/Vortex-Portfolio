import { isAxiosError } from "axios";

export const createErrorMessage = (error: unknown) => {
	let errorMessage = "An unexpected error";
	if (isAxiosError(error)) {
    errorMessage = error.response?.data?.message || error.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
	return errorMessage;
};
