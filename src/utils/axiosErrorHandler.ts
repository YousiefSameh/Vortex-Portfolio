import { isAxiosError } from "axios";

export const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    const data = error.response?.data;
    if (data?.errors && Array.isArray(data.errors)) {
      return data.errors.map((err: { msg: string; }) => err.msg).join(", ");
    }
    return data?.message || error.message;
  } else if (error instanceof Error) {
    return error.message;
  }
  return "حدث خطأ غير معروف";
};
